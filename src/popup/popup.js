
/**
 * Show range editor.
 */

document.querySelector('a.show-range').addEventListener('click', function(e) {
  document.querySelector('.cube').style['transform'] = 'translate(-160px, 0)';
});

/**
 * Hide range editor.
 */

document.querySelector('a.hide-range').addEventListener('click', function(e) {
  document.querySelector('.cube').style['transform'] = 'translate(0, 0)';
});

/**
 * Set value for input range.
 */

chrome.storage.local.get(['threshold'], function(items) {
  if (!items.threshold) return;
  document.querySelector('.range').value = items.threshold;
  document.querySelectorAll('.range-value').forEach(function(el) {
    el.innerText = Math.round(items.threshold * 100) + '%';
  });
});

/**
 * On slider change, then update UI.
 */

chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (key in changes) if (key === 'threshold' && changes.threshold.newValue) updateUI();
});

/**
 * Bind threshold change to input range.
 */

document.querySelector('.range').addEventListener('input', function(e) {
  chrome.storage.local.set({ threshold: this.value });
});

/**
 * Bind authenticate to login button.
 */

document.querySelector('.login').addEventListener('click', function(e) {
  Twitter.authenticate();
});

/**
 * Bind logout to logout button.
 */

document.querySelector('.logout').addEventListener('click', function(e) {
  Twitter.logout();
  document.querySelector('.container').style.display = 'none';
  document.querySelector('.login').style.display = 'block';
});

/**
 * If logged in.
 */

Twitter.isLoggedIn(function(items) {
  if (items.oauth_token && items.oauth_token_secret) {
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
    updateUI();
  } else {
    return Twitter.authenticate();
  }
});

/**
 * Update UI.
 */

function updateUI() {
  chrome.storage.local.get(null, function(items) {
    var checked = calculateBotsAndAccounts(items);
    document.querySelector('.accounts').innerText = getAccountText(checked.accounts);
    document.querySelector('.bots').innerText = getBotText(checked.bots);
    document.querySelectorAll('.range-value').forEach(function(el) {
      el.innerText = Math.round(items.threshold * 100) + '%';
    });
  });
}

/**
 * Calculate bots and accounts.
 */

function calculateBotsAndAccounts(items) {
  var accounts = Object.keys(items).length - 4;
  var bots = 0;
  for (userId in items) if (items[userId].score > items.threshold) bots++;
  return { accounts: accounts, bots: bots };
}

/**
 * Get text for bots.
 */

function getBotText(bots) {
  if (bots === 0) return 'No bots detected.';
  if (bots === 1) return bots + ' bot detected.';
  return bots + ' bots detected.';
}

/**
 * Get text for accounts.
 */

function getAccountText(accounts) {
  if (accounts === 0) return 'No accounts checked.';
  if (accounts === 1) return accounts + ' account checked.';
  return accounts + ' accounts checked.';
}

/**
 * Analytics.
 */

var analytics = new Analytics('aO23Wx83MZQnaPWyRvxffagdSm9I302w');

/**
 * Get ID.
 */

chrome.storage.local.get(['user_id'], function(items) {
  analytics.track({
    userId: items.user_id,
    event: 'Icon Clicked'
  });
});
