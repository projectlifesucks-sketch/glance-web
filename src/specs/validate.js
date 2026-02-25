/**
 * Comprehensive Design Validation Script v2
 * 
 * Validates: position, size, style, text, spacing, visual output
 * Run via browser.act(evaluate) at viewport 412x917
 * 
 * Returns JSON report: { summary, results[] }
 */
function validateDesign() {
  const TOLERANCE = { position: 3, size: 2 };
  const results = [];

  function getEl(testId) {
    return document.querySelector(`[data-testid="${testId}"]`);
  }

  function addResult(category, name, status, expected, actual, details) {
    results.push({ category, name, status, expected, actual, details: details || '' });
  }

  function approxEqual(a, b, tol) {
    return Math.abs(a - b) <= tol;
  }

  function parseRGB(str) {
    const m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    return m ? { r: +m[1], g: +m[2], b: +m[3] } : null;
  }

  // ===================== BOUNDS CHECKS =====================
  function checkBounds(testId, label, expected, tolOverride) {
    const el = getEl(testId);
    if (!el) {
      addResult('BOUNDS', `${label} - exists`, 'MISSING', 'element', 'not found', `[data-testid="${testId}"]`);
      return null;
    }
    const rect = el.getBoundingClientRect();
    const tol = { ...TOLERANCE, ...tolOverride };

    if (expected.x !== undefined) {
      const pass = approxEqual(rect.x, expected.x, tol.position);
      addResult('BOUNDS', `${label} - x`, pass ? 'PASS' : 'FAIL', expected.x, Math.round(rect.x), `off by ${Math.round(rect.x - expected.x)}px`);
    }
    if (expected.y !== undefined) {
      const pass = approxEqual(rect.y, expected.y, tol.position);
      addResult('BOUNDS', `${label} - y`, pass ? 'PASS' : 'FAIL', expected.y, Math.round(rect.y), `off by ${Math.round(rect.y - expected.y)}px`);
    }
    if (expected.width !== undefined) {
      const pass = approxEqual(rect.width, expected.width, tol.size);
      addResult('BOUNDS', `${label} - width`, pass ? 'PASS' : 'FAIL', expected.width, Math.round(rect.width), `off by ${Math.round(rect.width - expected.width)}px`);
    }
    if (expected.height !== undefined) {
      const pass = approxEqual(rect.height, expected.height, tol.size);
      addResult('BOUNDS', `${label} - height`, pass ? 'PASS' : 'FAIL', expected.height, Math.round(rect.height), `off by ${Math.round(rect.height - expected.height)}px`);
    }
    return rect;
  }

  // ===================== STYLE CHECKS =====================
  function checkStyle(testId, label, property, expected) {
    const el = getEl(testId);
    if (!el) {
      addResult('STYLE', `${label} - ${property}`, 'MISSING', expected, 'element not found');
      return;
    }
    const computed = getComputedStyle(el);
    const actual = computed[property];

    if (typeof expected === 'object' && expected.contains) {
      const pass = actual.includes(expected.contains);
      addResult('STYLE', `${label} - ${property}`, pass ? 'PASS' : 'FAIL', `contains "${expected.contains}"`, actual.substring(0, 80));
    } else {
      const pass = actual === expected;
      addResult('STYLE', `${label} - ${property}`, pass ? 'PASS' : 'FAIL', expected, actual);
    }
  }

  // ===================== TEXT CHECKS =====================
  function checkText(testId, label, expected) {
    const el = getEl(testId);
    if (!el) {
      addResult('TEXT', `${label}`, 'MISSING', expected, 'element not found');
      return;
    }
    const actual = el.textContent.trim();
    if (typeof expected === 'object' && expected.contains) {
      const pass = actual.toLowerCase().includes(expected.contains.toLowerCase());
      addResult('TEXT', `${label}`, pass ? 'PASS' : 'FAIL', `contains "${expected.contains}"`, actual.substring(0, 60));
    } else {
      const pass = actual === expected;
      addResult('TEXT', `${label}`, pass ? 'PASS' : 'FAIL', expected, actual.substring(0, 80));
    }
  }

  // ===================== RELATIVE POSITION CHECKS =====================
  function checkBelow(testIdA, testIdB, labelA, labelB, minGap, maxGap) {
    const elA = getEl(testIdA);
    const elB = getEl(testIdB);
    if (!elA || !elB) {
      addResult('LAYOUT', `${labelB} below ${labelA}`, 'MISSING', 'both elements', 'one or both not found');
      return;
    }
    const rectA = elA.getBoundingClientRect();
    const rectB = elB.getBoundingClientRect();
    const gap = rectB.top - rectA.bottom;
    const pass = gap >= minGap && gap <= maxGap;
    addResult('LAYOUT', `${labelB} below ${labelA} (gap)`, pass ? 'PASS' : 'FAIL', `${minGap}-${maxGap}px`, `${Math.round(gap)}px`);
  }

  // ===================== CHILD COUNT CHECK =====================
  function checkChildCount(testId, label, expectedCount) {
    const el = getEl(testId);
    if (!el) {
      addResult('STRUCTURE', `${label} - child count`, 'MISSING', expectedCount, 'element not found');
      return;
    }
    const actual = el.children.length;
    const pass = actual === expectedCount;
    addResult('STRUCTURE', `${label} - child count`, pass ? 'PASS' : 'FAIL', expectedCount, actual);
  }

  // ===================== SVG CHECK =====================
  function checkHasSVG(testId, label) {
    const el = getEl(testId);
    if (!el) {
      addResult('STRUCTURE', `${label} - has SVG`, 'MISSING', 'svg element', 'parent not found');
      return;
    }
    const svg = el.querySelector('svg');
    const pass = !!svg;
    addResult('STRUCTURE', `${label} - has SVG`, pass ? 'PASS' : 'FAIL', 'svg present', svg ? 'found' : 'missing');
  }

  // ===================== RUN ALL CHECKS =====================

  // Container
  checkBounds('splash-container', 'Container', { width: 412 }, { size: 10 });
  checkStyle('splash-container', 'Container', 'backgroundImage', { contains: 'radial-gradient' });

  // Status Bar
  checkBounds('status-bar', 'Status Bar', { height: 52 }, { size: 5 });

  // Header
  checkBounds('header', 'Header', { width: 412, height: 110 }, { size: 10 });

  // Back Button
  checkBounds('back-button', 'Back Button', { width: 36, height: 36 });
  checkStyle('back-button', 'Back Button', 'borderRadius', '50%');

  // Clock Button
  checkBounds('clock-button', 'Clock Button', { width: 36, height: 36 });

  // Plus Button
  checkBounds('plus-button', 'Plus Button', { width: 36, height: 36 });

  // Logo
  checkText('logo', 'Logo text', { contains: 'glance' });

  // AI Response
  checkText('ai-response', 'AI Response text', 'Love this vibe! Would you like to generate your look or refine it further?');
  checkStyle('ai-response', 'AI Response', 'fontSize', '15px');
  checkStyle('ai-response', 'AI Response', 'fontWeight', '500');
  checkStyle('ai-response', 'AI Response', 'color', 'rgb(255, 255, 255)');
  checkStyle('ai-response', 'AI Response', 'letterSpacing', '0.3px');

  // Refine Further Button
  checkBounds('btn-refine', 'Refine Button', { width: 132, height: 47 });
  checkStyle('btn-refine', 'Refine Button', 'borderRadius', '4px');
  checkStyle('btn-refine', 'Refine Button', 'fontSize', '15px');
  checkStyle('btn-refine', 'Refine Button', 'fontWeight', '400');
  checkText('btn-refine', 'Refine Button text', 'Refine Further');

  // Confirm Button
  checkBounds('btn-confirm', 'Confirm Button', { width: 132, height: 47 });
  checkStyle('btn-confirm', 'Confirm Button', 'borderRadius', '4px');
  checkText('btn-confirm', 'Confirm Button text', 'Confirm');

  // Spacing: Confirm below Refine
  checkBelow('btn-refine', 'btn-confirm', 'Refine', 'Confirm', 5, 20);

  // Feedback Icons
  checkChildCount('feedback-icons', 'Feedback Icons', 4);

  // Input Bar
  checkBounds('input-bar', 'Input Bar', { width: 394, height: 75 }, { size: 5 });
  checkStyle('input-bar', 'Input Bar', 'borderRadius', '24px 24px 0px 0px');

  // Send Button
  checkBounds('send-button', 'Send Button', { width: 38, height: 38 });
  checkHasSVG('send-button', 'Send Button');

  // ===================== SUMMARY =====================
  const passed = results.filter(r => r.status === 'PASS').length;
  const failed = results.filter(r => r.status === 'FAIL').length;
  const missing = results.filter(r => r.status === 'MISSING').length;

  return JSON.stringify({
    summary: {
      total: results.length,
      passed,
      failed,
      missing,
      score: `${passed}/${results.length} (${Math.round(passed/results.length*100)}%)`
    },
    failures: results.filter(r => r.status !== 'PASS'),
    all: results
  });
}

validateDesign();
