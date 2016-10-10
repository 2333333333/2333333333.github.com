
var defaultPageSize = 5;
var arr = eval('[{"title":"git学习笔记","date":"2016-08-26 10:37:43","desc":"﻿Git学习过程中的记录，从安装开始一步一步学习Git"},{"title":"Git学习","date":"2016-08-26 10:37:29","desc":"﻿Git学习过程中的记录"},{"title":"git基本命令集合-常用版","date":"2016-08-26 10:37:10","desc":"﻿本文是学习Git过程中的记录"},{"title":"Git命令大全-详细版","date":"2016-08-26 10:36:53","desc":"﻿Git命令大全-详细版收录了大部分的Git命令"}]');
function get(currentPage) {
	return getResult(currentPage, defaultPageSize);
}
function getResult(currentPage, pageSize) {
	currentPage = parseInt(currentPage);
	pageSize = parseInt(pageSize);
	var startIndex = (currentPage - 1) * pageSize;
	var endIndex = startIndex + pageSize;
	if (arr.length <= startIndex) { return null;}
	if (endIndex > arr.length) { endIndex = arr.length;}
	return arr.slice(startIndex, endIndex);
}
function pageCount() {
	return getPageCount(defaultPageSize);
}
function getPageCount(pageSize) {
	return Math.ceil(arr.length / pageSize);
}
function getQueryString(query) {
	var uri = window.location.search;
    var re = new RegExp("" +query+ "=([^&?]*)", "ig");
    return ((uri.match(re))?(uri.match(re)[0].substr(query.length+1)):null);
}
	