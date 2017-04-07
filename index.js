function beautifyCmd(s){
    var r = '';
    r = s.replace(/(\ -)/g,'\n$1');
    return r;
}

function compressCmd(s){
    return s.replace(/\n/g,'');
}

var r = beautifyCmd('curl \'https://m.news.baidu.com/news?tn=bdapibaiyue&t=hotwordnews&wf=0\' -H \'Pragma: no-cache\' -H \'Accept-Encoding: gzip, deflate, sdch, br\' -H \'Accept-Language: zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.4\' -H \'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36\' -H \'accept: application/json, text/plain, */*\' -H \'Referer: https://m.news.baidu.com/news?fr=mohome&ssid=674d43756c6e6f383f50&from=&uid=&pu=sz%40224_220%2Cta%40iphone___3_537&bd_page_type=1\' -H \'Cookie: SIGNIN_UC=70a2711cf1d3d9b1a82d2f87d633bd8a02387316699; BDUSS=25YNzFWeTUtMG1SZlo0ZWVEUnBBUHBrVjR4VXg0Y1lTcGlKMFBjdUd3SHVOd2RaSVFBQUFBJCQAAAAAAAAAAAEAAABnTT9QQ3Vsbm84AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO6q31juqt9YQ; BAIDUID=E2C6E9ACD6B3FB87D72296E7B0DAD562:FG=1; PSTM=1491478730; BIDUPSID=C568B68C7BFF1EF25590ED7E6A895828; BDRCVFR[S4-dAuiWMmn]=I67x6TjHwwYf0; PSINO=5; pgv_pvi=9588670464; pgv_si=s7556525056; cflag=15%3A3; H_PS_PSSID=1449_18194_21086_17001_22159; H_WISE_SIDS=114453_102570_104494_114821_108373_103569_109549_114702_107317_115317_115245_115109_115288_115044_114797_115446_114329_114535_114819_115218_115350_115032_114275_115166_115194_110085; BDORZ=AE84CDB3A529C0F8A2B9DCDD1D18B695\' -H \'Connection: keep-alive\' -H \'Cache-Control: no-cache\' --compressed');
console.log(r);

r = compressCmd(r);
console.log(r);