module.exports = {
  'app.name': 'OSS Browser',
  'language': 'Language',
  'name': 'Name',
  'type': 'Type',

  'region.oss-cn-hangzhou': 'East China 1(Hangzhou)',
  'region.oss-cn-shanghai': 'East China 2(Shanghai)',
  'region.oss-cn-qingdao': 'North China 1(Qingdao)',
  'region.oss-cn-beijing': 'North China 2(Beijing)',
  'region.oss-cn-zhangjiakou': 'North China 3(Zhangjiakou)',
  'region.oss-cn-shenzhen': 'South China 1(Shenzhen)',
  'region.oss-cn-hongkong': 'Hongkong',

  'region.oss-ap-southeast-1': 'Asia Pacific Southeast 1(Singapore)',
  'region.oss-ap-southeast-2': 'Asia Pacific Southeast 2(Sydney)',
  'region.oss-ap-northeast-1': 'Asia Pacific Northeast 1(Tokyo)',

  'region.oss-us-west-1': 'Western US 1(Silicon Valley)',
  'region.oss-us-east-1': 'Eastern US 1(Virginia)',
  'region.oss-eu-central-1': 'Central Europe 1(Frankfurt)',
  'region.oss-me-east-1': 'Middle East East 1(Dubai)',

  'auth.akLogin': 'AK Login',
  'auth.tokenLogin': 'Token Login',
  'auth.presetOssPath': 'Preset OSS Path',
  'auth.presetOssPath.placeholder': 'Optional, format: oss://bucket/key/',
  'auth.id.placeholder': 'AccessKeyId',
  'auth.secret.placeholder': 'AccessKeySecret',
  'region': 'Region',
  'auth.region.placeholder': 'Optional',
  'auth.description': 'Description',
  'auth.description.placeholder': 'Optional, Up to 30 words',
  'auth.remember': 'Remember',
  'auth.login': 'Login',
  'auth.akHistories': 'AK histories',

  'auth.authToken': 'Auth-Token',
  'auth.authToken.tooltip': 'Open the help file',
  'auth.authToken.placeholder': 'Please enter the authorization token',
  'auth.authToken.error.invalid': 'Please enter a valid authorization code',
  'auth.authToken.error.expired': 'The authorization code has expired',
  'auth.authToken.info.validUntil': 'Valid until {{expiration}}',
  'auth.authToken.info.leftTime': 'Left Time',

  'auth.clearHistories': 'Clear histories',

  'actions': 'Actions',
  'use': 'Use',
  'delete': 'Remove',
  'ok': 'OK',
  'cancel': 'Cancel',
  'close': 'Close',

  'auth.removeAK.title': 'Remove AK',
  'auth.removeAK.message': 'Remove AK：{{id}}, Are you sure?',

  'auth.clearAKHistories.title': 'Clear AK Histories',
  'auth.clearAKHistories.message': 'Are you sure?',
  'auth.clearAKHistories.successMessage': 'All AK Histories has been clear',

  'storageClassesType.standard': 'Standard',
  'storageClassesType.ia': 'IA',
  'storageClassesType.archive': 'Archive',

  'aclType.default': 'Inherit From Bucket',
  'aclType.public-read-write': 'Public Read and Write',
  'aclType.public-read': 'Public Read',
  'aclType.private': 'Private',

  'files': 'Files',
  'settings': 'Settings',
  'about': 'About',
  'bookmarks': 'Bookmarks',
  'logout': 'Logout',
  'logout.message': 'Are you sure you wan\'t to logout?',
  'main.upgration': 'Upgration',
  'tempCert': 'Temp Cert',
  'setup.success': 'Set up successfully',

  //address bar
  'backward': 'Backward',
  'forward': 'Forward',
  'goUp': 'Go up',
  'refresh': 'Refresh',
  'home': 'Home',
  'saveAsHome': 'Set Home Page',
  'saveToFav': 'Save To Bookmarks',
  'saveAsHome.success': 'Set home page success',

  'bookmark.remove.success': 'Remove Bookmark success',
  'bookmark.add.error1': 'Add Bookmark failed: Exceeds the maximum limit',
  'bookmark.add.success': 'Add Bookmark success',

  //bucket
  'bucket.add': 'Create Bucket',
  'bucket.multipart': 'MultiPart',
  'acl': 'ACL',
  'privilege': 'Privilege',
  'simplePolicy': 'Simple Policy',
  'more': 'More',
  'bucket.name': 'Bucket Name',
  'creationTime': 'Creation Time',

  'multipart.management': 'Multipart',
  'multipart.description': 'Manage events and fragments that are generated during the multipipart (upload) process.',
  'multipart.description.tooltip': 'That is, the Multipart Upload that has been initialized but not the Complete or Abort\'s Multipart Upload event',

  'select.all': "Select All",
  'delete.selected': "Delete selected",
  'delete.all': "Delete All",

  'initiatedTime': "Initiated Time",

  'loading': 'Loading...',
  'nodata': 'No data',

  'delete.multiparts.title': 'Delete multiparts',
  'delete.multiparts.message': 'Are you sure you wan\'t to delete {{num}} multiparts？',
  'delete.multiparts.on': 'Deleting...',
  'delete.multiparts.success': 'Deleted multiparts successfully',

  'bucketACL.update': 'Update Bucket ACL',
  'bucketACL.update.success': 'Update successfully',

  'bucket.add.success': 'Created successfully',

  'bucket.delete.title': 'Delete Bucket',
  'bucket.delete.message': 'Bucket Name:<code>{{name}}</code>, Region:<code>{{region}}</code>, Are you sure you wan\'t to delete this bucket?',
  'bucket.delete.success': 'Deleted Bucket Successfully',

  'simplePolicy.title': 'Simplify policy authorization',
  'simplePolicy.lb1.1': 'Resources',
  'simplePolicy.lb1.2': 'Privileges',
  'privilege.readonly': 'ReadOnly',
  'privilege.readwrite': 'ReadWrite',
  'privilege.all': 'ReadWrite',
  'simplePolicy.lb3.1': 'View Policy',
  'simplePolicy.lb3.2': 'Collapse',
  'simplePolicy.lb4': 'Create policy, named',

  'readonly': 'Read-Only',
  'readwrite': 'Read-Write',

  'simplePolicy.lb5': 'And authorized to',
  'subusers': 'Sub User',
  'usergroups': 'User Group',
  'roles': 'Role',

  'chooseone': 'Choose one',

  'simplePolicy.ok': 'OK',
  'simplePolicy.noauth.message1': 'You are not authorized to get user list',
  'simplePolicy.noauth.message2': 'You are not authorized to get use group list',
  'simplePolicy.noauth.message3': 'You are not authorized to get role list',
  'simplePolicy.success': 'Apply policy successfully',

  //settings
  'settings.maxUploadNum': 'Upload tasks concurrent number',
  'settings.maxDownloadNum': 'Download tasks concurrent number',
  'settings.WhetherShowThumbnail': 'Whether to show the image thumbnail',
  'settings.WhetherShowThumbnail.msg': 'Displaying thumbnails in the list of files will consume a certain amount of traffic',
  'settings.success': 'Saved successfully',

  //bookmark
  'bookmarks.title': 'Bookmarks',
  'time': 'Time',
  'bookmarks.delete.success': 'Deleted bookmark successfully',

  'opensource.address': 'Open source',
  'foundNewVersion': 'Found new version',
  'clickToDownload': 'Click to download',
  'currentIsLastest': 'This is the lastest version!',

  //files
  'upload': 'Upload',
  'folder.create': 'Directory',
  'folder.create.success': 'Directory created successfully',
  'folder.name': "Name",

  'download': 'Download',
  'copy': 'Copy',
  'move': 'Move',
  'paste': 'Paste',
  'rename': 'Rename',
  'getAddress': 'Address',
  'genAuthToken': 'Authorization Token',

  'rename.to': 'Rename To',
  'whetherCover.title': 'Whether cover',
  'whetherCover.message1': 'Has the folder of the same name, is it covered?',
  'whetherCover.message2': 'Has the file of the same name already covered?',
  'rename.success': 'Rename successfully',
  'rename.on': 'Renaming...',
  'folder.in': 'Folder',
  'file': 'File',
  'folder': 'Folder',

  'copy.on': 'Copying...',
  'move.on': 'Moving...',

  'use.cancelled': 'Cancelled by user',

  'copy.error1': 'Some files can not be copied',
  'move.error1': 'Some files can not be moved',
  'copy.success': 'Copied successfully',
  'move.success': 'Moved successfully',

  'stop': 'Stop',

  'paste.resources': 'Paste to current directory',

  'copy.cancel': 'Cancel Copy',
  'move.cancel': 'Cancel Move',

  'search.files.placeholder': 'Filter by name prefix',

  'genAuthToken.title': 'Generate Authorization Token',
  'genAuthToken.message1.1': 'Authorize to Bucket',
  'genAuthToken.message1.2': 'Authorize to Folder',
  'genAuthToken.message2': 'Privilege',

  'effective.duration': 'Effective duration',
  'unit.second': 's',

  'genAuthToken.message3.1': 'You also need to specify a role',
  'genAuthToken.message3.2': 'This role requires at least {{privilege}} access to this {{type}}',

  'genAuthToken.message4': 'Authorization Token',
  'genAuthToken.message5': 'Log in to the OSS browser using the generated authorization code above, You can get {{privilege}} access to this {{type}} [{{object}}], Valid until {{expiration}}.',
  'genAuthToken.message6.1': 'Generate',
  'genAuthToken.message6.2': 'Re-Generate',

  'deleteModal.title': 'Delete These Files',
  'deleteModal.message1': 'The following directory or file will be deleted',
  'delete.on': 'Deleting...',
  'delete.success': 'Deleted successfully',
  'deleteModal.message2': 'Has been cancelled',
  'deleteModal.message3': 'Some directories or files can not be deleted',

  'paste.message1': '{{action}} <span class="text-info">{{name}}...</span> to this directory (The same file or directory will be covered)？',

  'acl.update.title': 'Update ACL',
  'acl.update.success': 'ACL Updated successfully',
  'aclType.private.message': 'Private: All access to object needs to be authenticated',
  'aclType.public-read.message': 'Public read: need to write for the operation of the object authentication; object can be anonymous read',
  'aclType.public-read-write.message': 'Public read and write: Everyone can read and write objects',

  'getAddress.title': 'Get Address',
  'address': 'Address',
  'getAddress.message': 'Please enter the validity period of the link',
  'generate': 'Generate',
  'qrcode.download': 'Sweep code to download',

  'restore.checker.message1': 'Archive need to be restored in order to preview or download',
  'restore.immediately': 'Restore immediately',
  'restore.checker.message2': 'The archive has been restored, the expiration time',
  'restore.onprogress': 'Archive file is recovering, please be patient ...',
  'restore.on': 'Sending...',
  'restore.success': 'Restore request has been send successfully',
  'restore.days': 'Days',
  'restore.message2': 'The expiration time',
  'restore.title': 'Restore',
  'restore': 'Restore',

  'preview': 'Preview',
  'cannot.preview': 'Can not preview',
  'cannot.preview.this.file': 'Can not preview this file.',
  'tryto.open.as.textfile': 'Try to open as a text file',

  'save': 'Save',
  'filesize': 'File size',
  'codepreview.notsupport': 'This file does not support direct opening, please download to the local and then open.',
  'download.file': 'Download File',

  'lastModifyTime': 'Last Modified',
  'loading.more': 'Loading more...',

  'download.addtolist.on': 'Being added to the download queue',
  'download.addtolist.success': 'All added',

  'upload.addtolist.on': 'Being added to the upload queue',
  'upload.addtolist.success': 'All added',

  'transframe.search.placeholder': 'Filter by name or status',

  'start.all': 'Start All',
  'pause.all': 'Stop All',
  'clear.finished': 'Clear Finished',
  'clear.all': 'Clear All',

  'clear.all.title': 'Clear All',
  'clear.all.download.message': 'Are you sure you want to clear all download tasks?',
  'clear.all.upload.message': 'Are you sure you want to clear all upload tasks?',

  'pause.on': 'Stopping...',
  'pause.success': 'Stopped successfully',
  'remove.from.list.title': 'Remove',
  'remove.from.list.message': 'Are you sure you want to remove this task?',

}
