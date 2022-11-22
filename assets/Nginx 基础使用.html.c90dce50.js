import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as s,a as i,b as e,f as n,d as r,r as l}from"./app.5f15ca94.js";const o={},c=r('<h1 id="nginx-基础使用" tabindex="-1"><a class="header-anchor" href="#nginx-基础使用" aria-hidden="true">#</a> Nginx 基础使用</h1><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><p>进入Nginx的主目录我们可以看到这些文件夹 <code>client\\_body\\_temp conf fastcgi\\_temp html logs proxy\\_temp sbin scgi\\_temp uwsgi\\_temp</code></p><p>其中这几个文件夹在刚安装后是没有的，主要用来存放运行过程中的临时文件 <code>client\\_body\\_temp fastcgi\\_temp proxy\\_temp scgi\\_temp</code></p><h3 id="conf" tabindex="-1"><a class="header-anchor" href="#conf" aria-hidden="true">#</a> conf</h3><p>用来存放配置文件相关</p><h3 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> html</h3><p>用来存放静态文件的默认目录 html、css等 sbin</p><h3 id="sbin" tabindex="-1"><a class="header-anchor" href="#sbin" aria-hidden="true">#</a> sbin</h3><p>nginx的主程序</p><h3 id="基本运行原理" tabindex="-1"><a class="header-anchor" href="#基本运行原理" aria-hidden="true">#</a> 基本运行原理</h3><p>Nginx配置与应用场景</p><p>最小配置</p><h3 id="worker-processes" tabindex="-1"><a class="header-anchor" href="#worker-processes" aria-hidden="true">#</a> worker_processes</h3><h3 id="worker-processes-1-默认为1-表示开启一个业务进程-worker-connections" tabindex="-1"><a class="header-anchor" href="#worker-processes-1-默认为1-表示开启一个业务进程-worker-connections" aria-hidden="true">#</a> worker_processes 1; 默认为1，表示开启一个业务进程 worker_connections</h3><h3 id="worker-connections-1024-单个业务进程可接受连接数-include-mime-types" tabindex="-1"><a class="header-anchor" href="#worker-connections-1024-单个业务进程可接受连接数-include-mime-types" aria-hidden="true">#</a> worker_connections 1024; 单个业务进程可接受连接数 include mime.types;</h3><h3 id="include-mime-types-引入http-mime类型" tabindex="-1"><a class="header-anchor" href="#include-mime-types-引入http-mime类型" aria-hidden="true">#</a> include mime.types; 引入http mime类型</h3><h3 id="default-type-application-octet-stream" tabindex="-1"><a class="header-anchor" href="#default-type-application-octet-stream" aria-hidden="true">#</a> default_type application/octet-stream;</h3><h3 id="default-type-application-octet-stream-如果mime类型没匹配上-默认使用二进制流的方式传输。-sendfile-on" tabindex="-1"><a class="header-anchor" href="#default-type-application-octet-stream-如果mime类型没匹配上-默认使用二进制流的方式传输。-sendfile-on" aria-hidden="true">#</a> default_type application/octet-stream; 如果mime类型没匹配上，默认使用二进制流的方式传输。 sendfile on;</h3><h3 id="sendfile-on-使用linux的sendfile-socket-file-len-高效网络传输-也就是数据0拷贝。-未开启sendfile" tabindex="-1"><a class="header-anchor" href="#sendfile-on-使用linux的sendfile-socket-file-len-高效网络传输-也就是数据0拷贝。-未开启sendfile" aria-hidden="true">#</a> sendfile on; 使用linux的sendfile(socket, file, len) 高效网络传输，也就是数据0拷贝。 未开启sendfile</h3><p>开启后</p><h3 id="keepalive-timeout-65" tabindex="-1"><a class="header-anchor" href="#keepalive-timeout-65" aria-hidden="true">#</a> keepalive_timeout 65;</h3><p>keepalive_timeout 65;</p><p>server</p><p><img src="https://gitee.com/fishool/bucket/raw/master/2022/10/20221018082502.png" alt="" loading="lazy"></p><p>虚拟主机配置</p><p>server {</p><p>listen 80; 监听端口号</p><p>server_name localhost; 主机名</p><p>location / { 匹配路径</p><p>root html; 文件根目录</p><p>index index.html index.htm; 默认页名称 }</p><p>error_page 500 502 503 504 /50x.html; 报错编码对应页面 location = /50x.html {</p><p>root html;</p><p>}</p><p>}</p><h2 id="虚拟主机" tabindex="-1"><a class="header-anchor" href="#虚拟主机" aria-hidden="true">#</a> 虚拟主机</h2><p>原本一台服务器只能对应一个站点，通过虚拟主机技术可以虚拟化成多个站点同时对外提供服务 servername匹配规则我们需要注意的是servername匹配分先后顺序，写在前面的匹配上就不会继续往下匹配了。</p><h3 id="完整匹配" tabindex="-1"><a class="header-anchor" href="#完整匹配" aria-hidden="true">#</a> 完整匹配</h3><p>我们可以在同一servername中匹配多个域名</p>',40),p={href:"http://vod.mmban.com",target:"_blank",rel:"noopener noreferrer"},h={href:"http://www1.mmban.com",target:"_blank",rel:"noopener noreferrer"},u=r(`<h3 id="通配符匹配" tabindex="-1"><a class="header-anchor" href="#通配符匹配" aria-hidden="true">#</a> 通配符匹配</h3><p>server_name *.mmban.com123</p><h3 id="通配符结束匹配" tabindex="-1"><a class="header-anchor" href="#通配符结束匹配" aria-hidden="true">#</a> 通配符结束匹配</h3><p>server_name vod.*;</p><h3 id="正则匹配" tabindex="-1"><a class="header-anchor" href="#正则匹配" aria-hidden="true">#</a> 正则匹配</h3><p>server_name ~<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>+.mmban.com$;</p><h2 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h2><p>反向代理</p><p><code>proxy\\_pass http://baidu.com;</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location / {

      proxy\\_pass http://atguigu.com/;   

   }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基于反向代理的负载均衡" tabindex="-1"><a class="header-anchor" href="#基于反向代理的负载均衡" aria-hidden="true">#</a> 基于反向代理的负载均衡</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream httpd { 
	server 192.168.44.102:80;    
    server 192.168.43.103:80; 

} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="负载均衡策略轮询" tabindex="-1"><a class="header-anchor" href="#负载均衡策略轮询" aria-hidden="true">#</a> 负载均衡策略轮询</h3><p>默认情况下使用轮询方式，逐一转发，这种方式适用于无状态请求。</p><h3 id="weight-权重" tabindex="-1"><a class="header-anchor" href="#weight-权重" aria-hidden="true">#</a> weight(权重)</h3><p>指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream httpd { 
    server 127.0.0.1:8050       weight=10 down;
    server 127.0.0.1:8060       weight=1; 
	server 127.0.0.1:8060      weight=1 backup;
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>down：表示当前的server暂时不参与负载 <ul><li>weight：默认为1.weight越大，负载的权重就越大。 <ul><li>backup： 其它所有的非backup机器down或者忙的时候，请求backup机器。</li></ul></li></ul></li></ul><h3 id="ip-hash" tabindex="-1"><a class="header-anchor" href="#ip-hash" aria-hidden="true">#</a> ip_hash</h3><p>根据客户端的ip地址转发同一台服务器，可以保持回话。</p><h3 id="least-conn" tabindex="-1"><a class="header-anchor" href="#least-conn" aria-hidden="true">#</a> least_conn</h3><p>最少连接访问</p><h3 id="url-hash" tabindex="-1"><a class="header-anchor" href="#url-hash" aria-hidden="true">#</a> url_hash</h3><p>根据用户访问的url定向转发请求 fair</p><p>根据后端服务器响应时间转发请求</p><h2 id="动静分离" tabindex="-1"><a class="header-anchor" href="#动静分离" aria-hidden="true">#</a> 动静分离</h2><h3 id="配置反向代理" tabindex="-1"><a class="header-anchor" href="#配置反向代理" aria-hidden="true">#</a> 配置反向代理</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location / { 
    proxy\\_pass http://127.0.0.1:8080;  
    root   html; 
    index  index.html index.htm; 
} 
location /css { 
    root   /usr/local/nginx/static;  
    index  index.html index.htm; 
} 

location /images { 
    root   /usr/local/nginx/static;          
    index  index.html index.htm; 
} 

location /js { 
    root   /usr/local/nginx/static;     
    index  index.html index.htm; 
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="增加每一个location" tabindex="-1"><a class="header-anchor" href="#增加每一个location" aria-hidden="true">#</a> 增加每一个location</h3><p>使用一个location</p><p>使用正则</p><p>location 前缀</p><p>/ 通用匹配，任何请求都会匹配到。</p><p>= 精准匹配，不是以指定模式开头</p><p>~ 正则匹配，区分大</p><p>~* 正则匹配，不区分大小写</p><p>^~ 非正则匹配，匹配以指定模式开头的location location匹配顺序</p><p>location匹配顺序</p><ul><li><p>多个正则location直接按书写顺序匹配，成功后就不会继续往后面匹配</p></li><li><p>普通（非正则）location会一直往下，直到找到匹配度最高的（最大前缀匹配）</p></li><li><p>当普通location与正则location同时存在，如果正则匹配成功,则不会再执行普通匹配</p></li><li><p>所有类型location存在时，<strong>“=”匹配 &gt; “^~”匹配 &gt; 正则匹配 &gt; 普通（最大前缀匹配）</strong></p><p>location ~*/(css|img|js) {root /usr/local/nginx/static;index index.html index.htm</p></li></ul><p>root用来设置根目录，而alias在接受请求的时候在路径上不会加上location。</p><p>1）alias指定的目录是准确的，即location匹配访问的path目录下的文件直接是在alias目录下查找的；</p><p>2）root指定 的目录是location匹配访问的path目录的上一级目录,这个path目录一定要是真实存在root指定目录下的；</p><p>3）使用 alias标签的目录块中不能使用rewrite的break（具体原因不明）；另外，alias指定的目录后面必须要加上&quot;/&quot;符 号！！</p><p>4）alias虚拟目录配置中，location匹配的path目录如果后面不带&quot;/&quot;，那么访问的url地址中这个path目录后 面加不加&quot;/&quot;不影响访问，访问时它会自动加上&quot;/&quot;； 但是如果location匹配的path目录后面加上&quot;/&quot;，那么访问的url地 址中这个path目录必须要加上&quot;/&quot;，访问时它不会自动加上&quot;/&quot;。如果不加上&quot;/&quot;，访问就会失败！</p><p>5）root目录配置 中，location匹配的path目录后面带不带&quot;/&quot;，都不会影响访问。</p><h2 id="urlrewrite" tabindex="-1"><a class="header-anchor" href="#urlrewrite" aria-hidden="true">#</a> UrlRewrite</h2><p>rewrite语法格式及参数语法:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rewrite是实现URL重写的关键指令，根据regex (正则表达式)部分内容， 重定向到replacement，结尾是flag标记。 

rewrite    &lt;regex&gt;    &lt;replacement&gt;    [flag]; 
关键字      正则        替代内容         flag标记 

关键字：其中关键字error\\_log不能改变 

正则：perl兼容正则表达式语句进行规则匹配 替代内容：将正则匹配的内容替换成replacement flag标记：rewrite支持的flag标记 

rewrite参数的标签段位置： server,location,if 

flag标记说明： 

last  #本条规则匹配完成后，继续向下匹配新的location URI规则
break  #本条规则匹配完成即终止，不再匹配后面的任何规则 

redirect  #返回302临时重定向，浏览器地址会显示跳转后的URL地址
permanent  #返回301永久重定向，浏览器地址栏会显示跳转后的URL地址 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例</p><p><code>rewrite ^/([0-9]+).html$ /index.jsp?pageNum=$1 break;</code></p><h2 id="同时使用负载均衡" tabindex="-1"><a class="header-anchor" href="#同时使用负载均衡" aria-hidden="true">#</a> 同时使用负载均衡</h2><h3 id="应用服务器防火墙配置" tabindex="-1"><a class="header-anchor" href="#应用服务器防火墙配置" aria-hidden="true">#</a> 应用服务器防火墙配置</h3><p>开启防火墙</p><p><code>systemctl start firewalld</code></p><p>重启防火墙</p><p><code>systemctl restart firewalld</code></p><p>重载规则</p><p><code>firewall-cmd --reload</code></p><p>查看已配置规则</p><p><code>firewall-cmd --list-all</code></p><p>指定端口和ip访问</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>firewall-cmd --permanent --add-rich-rule=&quot;rule family=&quot;ipv4&quot; source address=&quot;192.168.44.101&quot; port protocol=&quot;tcp&quot; port=&quot;8080&quot; accept&quot; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>移除规则</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>firewall-cmd --permanent --remove-rich-rule=&quot;rule family=&quot;ipv4&quot; source address=&quot;192.168.44.101&quot; port port=&quot;8080&quot; protocol=&quot;tcp&quot; accept&quot; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="网关配置" tabindex="-1"><a class="header-anchor" href="#网关配置" aria-hidden="true">#</a> 网关配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream httpds { 
    server 192.168.44.102 weight=8 down; 
    server 192.168.44.103:8080 weight=2;
    server 192.168.44.104:8080 weight=1 backup;
} 

location / { 
    rewrite ^/([0-9]+).html$  /index.jsp?pageNum=$1   redirect; 
    proxy\\_pass http://httpds ; 
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="防盗链配置" tabindex="-1"><a class="header-anchor" href="#防盗链配置" aria-hidden="true">#</a> 防盗链配置</h2><p>valid_referers none | blocked | server_names | strings ....;</p><ul><li>none， 检测 Referer 头域不存在的情况。</li><li>blocked，检测 Referer 头域的值被防火墙或者代理服务器删除或伪装的情况。这种情况该头域的值不以 “http://” 或 “https://” 开头。</li><li>server_names ，设置一个或多个 URL ，检测 Referer 头域的值是否是这些 URL 中的某一个</li></ul><p>在需要防盗链的location中配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>valid\\_referers 192.168.44.101;   
if ($invalid\\_referer) { 
	return 403; 
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用curl测试</p>`,72),v={href:"http://192.168.44.101/img/logo.png",target:"_blank",rel:"noopener noreferrer"},m=i("p",null,"带引用",-1),b={href:"http://baidu.com",target:"_blank",rel:"noopener noreferrer"},x={href:"http://192.168.44.101/img/logo.png",target:"_blank",rel:"noopener noreferrer"},f=r(`<h2 id="高可用配置" tabindex="-1"><a class="header-anchor" href="#高可用配置" aria-hidden="true">#</a> 高可用配置</h2><h3 id="安装keepalived" tabindex="-1"><a class="header-anchor" href="#安装keepalived" aria-hidden="true">#</a> 安装Keepalived</h3><p>安装依赖</p><p><code>yum install openssl-devel </code></p><p>yum安装</p><p><code>yum install keepalived </code></p><p>配置</p><p>使用yum安装后配置文件在</p><p><code>/etc/keepalived/keepalived.conf</code></p><p>最小配置</p><p>第一台机器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>! Configuration File for keepalived 

global\\_defs { 
    router\\_id lb111 
} 
    
vrrp\\_instance atguigu {  
    state MASTER 
    interface ens33 
    virtual\\_router\\_id 51 
    priority 100 
    advert\\_int 1 
    authentication { 
        auth\\_type PASS       
        auth\\_pass 1111    
    } 
    virtual\\_ipaddress {    
        192.168.44.200     
    } 
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二台机器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>! Configuration File for keepalived 
global\\_defs { 
	router\\_id lb110 
} 

vrrp\\_instance atguigu {    
    state BACKUP 
    interface ens33 
    virtual\\_router\\_id 51    
    priority 50 
    advert\\_int 1 
    authentication { 
        auth\\_type PASS      
        auth\\_pass 1111  
    } 
    virtual\\_ipaddress {    
        192.168.44.200
    } 
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动服务</p><p><code>systemctl start keepalived </code></p><h2 id="https证书配置" tabindex="-1"><a class="header-anchor" href="#https证书配置" aria-hidden="true">#</a> Https证书配置</h2><p>不安全的http协议</p><p>openssl</p><p>openssl包含：SSL协议库、应用程序以及密码算法库</p><p>自签名</p><p>OpenSSL</p><p>系统内置</p><p>图形化工具 XCA</p><p>下载地址</p>`,25),g={href:"https://www.hohnstaedt.de/xca/index.php/download",target:"_blank",rel:"noopener noreferrer"},_=r('<p>CA 签名</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>0-9 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',3);function w(k,q){const a=l("ExternalLinkIcon");return t(),s("div",null,[c,i("p",null,[e("server_name "),i("a",p,[e("vod.mmban.com"),n(a)]),e(),i("a",h,[e("www1.mmban.com"),n(a)]),e(";")]),u,i("p",null,[e("curl -I "),i("a",v,[e("http://192.168.44.101/img/logo.png"),n(a)])]),m,i("p",null,[e('curl -e "'),i("a",b,[e("http://baidu.com"),n(a)]),e('" -I '),i("a",x,[e("http://192.168.44.101/img/logo.png"),n(a)])]),f,i("p",null,[i("a",g,[e("https://www.hohnstaedt.de/xca/index.php/download"),n(a)])]),_])}const R=d(o,[["render",w],["__file","Nginx 基础使用.html.vue"]]);export{R as default};
