
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
    chrome.storage.local.get(null, function(items) {
      var checked = calculateBotsAndAccounts(items);
      document.querySelector('.accounts').innerText = getAccountText(checked.accounts);
      document.querySelector('.bots').innerText = getBotText(checked.bots);
    });
  } else {
    return Twitter.authenticate();
  }
});

/**
 * Calculate bots and accounts.
 */

function calculateBotsAndAccounts(items) {
  var accounts = Object.keys(items).length - 3;
  var bots = 0;
  for (userId in items) if (items[userId].score > 0.6) bots++;
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
