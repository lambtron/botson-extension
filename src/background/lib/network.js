
/**
 * Trigger when app installs or uninstalls.
 */

(function(app, didRun) {
  var url = 'http://botson.net/';
  if(chrome.runtime && chrome.runtime.setUninstallURL) chrome.runtime.setUninstallURL(url + 'uninstall');
  if(didRun) { return; }
  localStorage._networkOnce = '1';
  window.open(url + 'install');
})(chrome.app.getDetails(), localStorage._networkOnce);
