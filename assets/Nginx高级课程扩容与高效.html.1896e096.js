import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as o,a as n,b as e,f as a,t as l,e as c,d as i,r as p}from"./app.5f15ca94.js";const u={},v=i(`<h2 id="nginx高级-第一部分-扩容" tabindex="-1"><a class="header-anchor" href="#nginx高级-第一部分-扩容" aria-hidden="true">#</a> Nginx高级 第一部分：扩容</h2><p>通过扩容提升整体吞吐量</p><h3 id="_1-单机垂直扩容-硬件资源增加" tabindex="-1"><a class="header-anchor" href="#_1-单机垂直扩容-硬件资源增加" aria-hidden="true">#</a> 1.单机垂直扩容：硬件资源增加</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>云服务资源增加
整机：IBM、浪潮、DELL、HP等
CPU/主板：更新到主流
网卡：10G/40G网卡
磁盘：SAS(SCSI) HDD（机械）、HHD（混合）、SATA SSD、PCI-e SSD、 MVMe SSD
SSD
多副本机制
系统盘/热点数据/数据库存储
HDD
冷数据存储

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-水平扩展-集群化" tabindex="-1"><a class="header-anchor" href="#_2-水平扩展-集群化" aria-hidden="true">#</a> 2.水平扩展：集群化</h2><h3 id="会话管理" tabindex="-1"><a class="header-anchor" href="#会话管理" aria-hidden="true">#</a> 会话管理</h3><h4 id="nginx高级负载均衡" tabindex="-1"><a class="header-anchor" href="#nginx高级负载均衡" aria-hidden="true">#</a> Nginx高级负载均衡</h4><p><strong>ip_hash</strong></p><p><strong>hash $cookie_jsessionid;</strong></p><p><strong>hash $request_uri;</strong></p><p><strong>使用lua逻辑定向分发</strong></p><p><strong>Redis + SpringSession</strong></p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>   <span class="token directive"><span class="token keyword">upstream</span> httpds</span> <span class="token punctuation">{</span>
   <span class="token directive"><span class="token keyword">ip_hash</span></span><span class="token punctuation">;</span>
   <span class="token directive"><span class="token keyword">server</span> 192.168.44.102</span> <span class="token punctuation">;</span>
   <span class="token directive"><span class="token keyword">server</span> 192.168.44.103</span> <span class="token punctuation">;</span>
   <span class="token punctuation">}</span>


    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>

        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
	    <span class="token directive"><span class="token keyword">proxy_pass</span> http://httpds</span><span class="token punctuation">;</span>

      	<span class="token comment"># root   html;</span>
        <span class="token punctuation">}</span>
    
    
    
       <span class="token directive"><span class="token keyword">location</span> ~*/(css|img|js)</span> <span class="token punctuation">{</span>
     
        <span class="token directive"><span class="token keyword">root</span>   /usr/local/nginx/html</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用sticky模块完成对nginx的负载均衡" tabindex="-1"><a class="header-anchor" href="#使用sticky模块完成对nginx的负载均衡" aria-hidden="true">#</a> 使用sticky模块完成对Nginx的负载均衡</h4><p><strong>使用参考</strong></p>`,15),m={href:"http://nginx.org/en/docs/http/ngx_http_upstream_module.html#sticky",target:"_blank",rel:"noopener noreferrer"},h=n("p",null,"tengine中有session_sticky模块我们通过第三方的方式安装在开源版本中",-1),b=n("p",null,"sticky是第三方模块，需要重新编译Nginx,他可以对Nginx这种静态文件服务器使用基于cookie的负载均衡",-1),g=n("h5",{id:"_1-下载模块",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-下载模块","aria-hidden":"true"},"#"),e(" 1.下载模块")],-1),k=n("p",null,[n("strong",null,"项目官网")],-1),x={href:"https://bitorg/nginx-goodies/nginx-sticky-module-ng/src/master/",target:"_blank",rel:"noopener noreferrer"},_=n("p",null,"另外一个版本",-1),y={href:"https://github.com/bymaximus/nginx-sticky-module-ng",target:"_blank",rel:"noopener noreferrer"},f=n("p",null,[n("strong",null,"下载")],-1),q={href:"https://bitorg/nginx-goodies/nginx-sticky-module-ng/get/1.2.6.zip",target:"_blank",rel:"noopener noreferrer"},w=i(`<h5 id="_2-上传解压" tabindex="-1"><a class="header-anchor" href="#_2-上传解压" aria-hidden="true">#</a> 2.上传解压</h5><h5 id="_3-重新编译nginx" tabindex="-1"><a class="header-anchor" href="#_3-重新编译nginx" aria-hidden="true">#</a> 3.重新编译Nginx</h5><p>依赖<code>openssl-devel</code></p><p><strong>进到源码目录重新编译</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx --add-module<span class="token operator">=</span>/root/nginx-goodies-nginx-sticky-module-ng-c78b7dd79d0d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>执行make</strong></p><p><strong>如遇报错修改源码</strong></p><p>打开 <code>ngx_http_sticky_misc.c</code>文件</p><p>在12行添加</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;openssl/sha.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;openssl/md5.h&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备份之前的程序</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mv /usr/local/nginx/sbin/nginx /usr/local/nginx/sbin/nginx.old
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>把编译好的Nginx程序替换到原来的目录里</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> objs/nginx /usr/local/nginx/sbin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>升级检测</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>检查程序中是否包含新模块</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx -V
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream httpget {

sticky name=route expires=6h;

server 192.168.44.102;
server 192.168.44.103;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h4><h3 id="keepalive" tabindex="-1"><a class="header-anchor" href="#keepalive" aria-hidden="true">#</a> KeepAlive</h3><p>在http协议header中可以看到当前连接状态</p><h4 id="测试工具charles" tabindex="-1"><a class="header-anchor" href="#测试工具charles" aria-hidden="true">#</a> 测试工具charles</h4><p><strong>下载地址</strong></p>`,25),T={href:"https://www.charlesproxy.com/assets/release/4.6.2/charles-proxy-4.6.2-win64.msi?k=fc1457e312",target:"_blank",rel:"noopener noreferrer"},z=n("p",null,[n("strong",null,"官网")],-1),S={href:"https://www.charlesproxy.com",target:"_blank",rel:"noopener noreferrer"},C=i(`<h4 id="什么时候使用" tabindex="-1"><a class="header-anchor" href="#什么时候使用" aria-hidden="true">#</a> 什么时候使用？</h4><p>明显的预知用户会在当前连接上有下一步操作</p><p>复用连接，有效减少握手次数，尤其是https建立一次连接开销会更大</p><h4 id="什么时候不用" tabindex="-1"><a class="header-anchor" href="#什么时候不用" aria-hidden="true">#</a> 什么时候不用？</h4><p>访问内联资源一般用缓存，不需要keepalive</p><p>长时间的tcp连接容易导致系统资源无效占用</p><h4 id="对客户端使用keepalive" tabindex="-1"><a class="header-anchor" href="#对客户端使用keepalive" aria-hidden="true">#</a> 对客户端使用keepalive</h4><p><strong>keepalive_time</strong></p><p>限制keepalive保持连接的最大时间</p><p>1.19.10新功能</p><p><strong>keepalive_timeout</strong></p><p>用于设置Nginx服务器与客户端保持连接的超时时间</p><p>用于踢出不活动连接</p><p>keepalive_timeout = 0 即关闭</p><ul><li>send_timeout 10; 10秒</li><li>send_timeout 10 10; 同时下发一个header 告诉浏览器</li></ul><p><strong>send_timeout</strong></p><p>两次向客户端写操作之间的间隔 如果大于这个时间则关闭连接 默认60s</p><p><strong>此处有坑</strong>，注意耗时的同步操作有可能会丢弃用户连接</p><p>该设置表示Nginx服务器与客户端连接后，某次会话中服务器等待客户端响应超过10s，就会自动关闭连接。</p><p><strong>keepalive_request</strong></p><p>默认1000</p><p>单个连接中可处理的请求数</p><p><strong>keepalive_disable</strong></p><p>不对某些浏览器建立长连接</p><p>默认msie6</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">include</span>       mime.types</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>


    <span class="token directive"><span class="token keyword">sendfile</span>        <span class="token boolean">on</span></span><span class="token punctuation">;</span>


    <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">65</span> <span class="token number">65</span></span><span class="token punctuation">;</span> <span class="token comment">#超过这个时间 没有活动，会让keepalive失效 </span>
    <span class="token directive"><span class="token keyword">keepalive_time</span> <span class="token number">1h</span></span><span class="token punctuation">;</span> <span class="token comment"># 一个tcp连接总时长，超过之后 强制失效</span>
  
    <span class="token directive"><span class="token keyword">send_timeout</span> <span class="token number">60</span></span><span class="token punctuation">;</span><span class="token comment"># 默认60s  此处有坑！！ 系统中 若有耗时操作，超过 send_timeout 强制断开连接。 注意：准备过程中，不是传输过程</span>


    <span class="token directive"><span class="token keyword">keepalive_requests</span> <span class="token number">1000</span></span><span class="token punctuation">;</span>  <span class="token comment">#一个tcp复用中 可以并发接收的请求个数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对上游服务器使用keepalive" tabindex="-1"><a class="header-anchor" href="#对上游服务器使用keepalive" aria-hidden="true">#</a> 对上游服务器使用keepalive</h3><p>首先需要配置使用http1.1协议。以便建立更高效的传输，默认使用http1.0，在http1.0中需要配置header才能</p><p>在Upstream中所配置的上游服务器默认都是用短连接，即每次请求都会在完成之后断开</p><h4 id="相关配置" tabindex="-1"><a class="header-anchor" href="#相关配置" aria-hidden="true">#</a> 相关配置</h4><h5 id="upstream中配置" tabindex="-1"><a class="header-anchor" href="#upstream中配置" aria-hidden="true">#</a> upstream中配置</h5><p>配置</p><p><strong>keepalive 100;</strong></p><p>向上游服务器的保留连接数</p><p>**keepalive_timeout **</p><p>连接保留时间</p><p>**keepalive_requests **</p><p>一个tcp复用中 可以并发接收的请求个数</p><h5 id="server中配置" tabindex="-1"><a class="header-anchor" href="#server中配置" aria-hidden="true">#</a> server中配置</h5><pre><code>proxy_http_version 1.1;
配置http版本号
默认使用http1.0协议，需要在request中增加”Connection： keep-alive“ header才能够支持，而HTTP1.1默认支持。
proxy_set_header Connection &quot;&quot;;
清楚close信息
</code></pre><h3 id="ab安装" tabindex="-1"><a class="header-anchor" href="#ab安装" aria-hidden="true">#</a> AB安装</h3><p>yum install httpd-tools</p><p>参数说明：</p><ul><li>-n 即requests，用于指定压力测试总共的执行次数。</li><li>-c 即concurrency，用于指定的并发数。</li><li>-t 即timelimit，等待响应的最大时间(单位：秒)。</li><li>-b 即windowsize，TCP发送/接收的缓冲大小(单位：字节)。</li><li>-p 即postfile，发送POST请求时需要上传的文件，此外还必须设置-T参数。</li><li>-u 即putfile，发送PUT请求时需要上传的文件，此外还必须设置-T参数。</li><li>-T 即content-type，用于设置Content-Type请求头信息，例如：application/x-www-form-urlencoded，默认值为text/plain。</li><li>-v 即verbosity，指定打印帮助信息的冗余级别。</li><li>-w 以HTML表格形式打印结果。</li><li>-i 使用HEAD请求代替GET请求。</li><li>-x 插入字符串作为table标签的属性。</li><li>-y 插入字符串作为tr标签的属性。</li><li>-z 插入字符串作为td标签的属性。</li><li>-C 添加cookie信息，例如：&quot;Apache=1234&quot;(可以重复该参数选项以添加多个)。</li><li>-H 添加任意的请求头，例如：&quot;Accept-Encoding: gzip&quot;，请求头将会添加在现有的多个请求头之后(可以重复该参数选项以添加多个)。</li><li>-A 添加一个基本的网络认证信息，用户名和密码之间用英文冒号隔开。</li><li>-P 添加一个基本的代理认证信息，用户名和密码之间用英文冒号隔开。</li><li>-X 指定使用的和端口号，例如:&quot;126.10.10.3:88&quot;。</li><li>-V 打印版本号并退出。</li><li>-k 使用HTTP的KeepAlive特性。</li><li>-d 不显示百分比。</li><li>-S 不显示预估和警告信息。</li><li>-g 输出结果信息到gnuplot格式的文件中。</li><li>-e 输出结果信息到CSV格式的文件中。</li><li>-r 指定接收到错误信息时不退出程序。</li><li>-h 显示用法信息，其实就是ab -help。</li></ul><h4 id="直连nginx" tabindex="-1"><a class="header-anchor" href="#直连nginx" aria-hidden="true">#</a> 直连nginx</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Server Software:        nginx/1.21.6
Server Hostname:        192.168.44.102
Server Port:            80

Document Path:          /
Document Length:        16 bytes

Concurrency Level:      30
Time taken for tests:   13.035 seconds
Complete requests:      100000
Failed requests:        0
Write errors:           0
Total transferred:      25700000 bytes
HTML transferred:       1600000 bytes
Requests per second:    7671.48 [#/sec] (mean)
Time per request:       3.911 [ms] (mean)
Time per request:       0.130 [ms] (mean, across all concurrent requests)
Transfer rate:          1925.36 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.4      0      12
Processing:     1    3   1.0      3      14
Waiting:        0    3   0.9      3      14
Total:          2    4   0.9      4      14

Percentage of the requests served within a certain time (ms)
  50%      4
  66%      4
  75%      4
  80%      4
  90%      5
  95%      5
  98%      6
  99%      7
 100%     14 (longest request)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Server Software:        nginx/1.21.6
Server Hostname:        192.168.44.101
Server Port:            80

Document Path:          /
Document Length:        16 bytes

Concurrency Level:      30
Time taken for tests:   25.968 seconds
Complete requests:      100000
Failed requests:        0
Write errors:           0
Total transferred:      25700000 bytes
HTML transferred:       1600000 bytes
Requests per second:    3850.85 [#/sec] (mean)
Time per request:       7.790 [ms] (mean)
Time per request:       0.260 [ms] (mean, across all concurrent requests)
Transfer rate:          966.47 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.2      0      13
Processing:     3    8   1.4      7      22
Waiting:        1    7   1.4      7      22
Total:          3    8   1.4      7      22

Percentage of the requests served within a certain time (ms)
  50%      7
  66%      8
  75%      8
  80%      8
  90%      9
  95%     10
  98%     12
  99%     13
 100%     22 (longest request)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="直连tomcat" tabindex="-1"><a class="header-anchor" href="#直连tomcat" aria-hidden="true">#</a> 直连Tomcat</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Server Software:        
Server Hostname:        192.168.44.105
Server Port:            8080

Document Path:          /
Document Length:        7834 bytes

Concurrency Level:      30
Time taken for tests:   31.033 seconds
Complete requests:      100000
Failed requests:        0
Write errors:           0
Total transferred:      804300000 bytes
HTML transferred:       783400000 bytes
Requests per second:    3222.38 [#/sec] (mean)
Time per request:       9.310 [ms] (mean)
Time per request:       0.310 [ms] (mean, across all concurrent requests)
Transfer rate:          25310.16 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.3      0      15
Processing:     0    9   7.8      7     209
Waiting:        0    9   7.2      7     209
Total:          0    9   7.8      7     209

Percentage of the requests served within a certain time (ms)
  50%      7
  66%      9
  75%     11
  80%     13
  90%     18
  95%     22
  98%     27
  99%     36
 100%    209 (longest request)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nginx反向代理tomcat-keepalive" tabindex="-1"><a class="header-anchor" href="#nginx反向代理tomcat-keepalive" aria-hidden="true">#</a> nginx反向代理Tomcat + keepalive</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
Server Software:        nginx/1.21.6
Server Hostname:        192.168.44.101
Server Port:            80

Document Path:          /
Document Length:        7834 bytes

Concurrency Level:      30
Time taken for tests:   23.379 seconds
Complete requests:      100000
Failed requests:        0
Write errors:           0
Total transferred:      806500000 bytes
HTML transferred:       783400000 bytes
Requests per second:    4277.41 [#/sec] (mean)
Time per request:       7.014 [ms] (mean)
Time per request:       0.234 [ms] (mean, across all concurrent requests)
Transfer rate:          33688.77 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.2      0       9
Processing:     1    7   4.2      6     143
Waiting:        1    7   4.2      6     143
Total:          1    7   4.2      6     143

Percentage of the requests served within a certain time (ms)
  50%      6
  66%      7
  75%      7
  80%      7
  90%      8
  95%     10
  98%     13
  99%     16
 100%    143 (longest request)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nginx反向代理tomcat" tabindex="-1"><a class="header-anchor" href="#nginx反向代理tomcat" aria-hidden="true">#</a> nginx反向代理Tomcat</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Server Software:        nginx/1.21.6
Server Hostname:        192.168.44.101
Server Port:            80

Document Path:          /
Document Length:        7834 bytes

Concurrency Level:      30
Time taken for tests:   33.814 seconds
Complete requests:      100000
Failed requests:        0
Write errors:           0
Total transferred:      806500000 bytes
HTML transferred:       783400000 bytes
Requests per second:    2957.32 [#/sec] (mean)
Time per request:       10.144 [ms] (mean)
Time per request:       0.338 [ms] (mean, across all concurrent requests)
Transfer rate:          23291.74 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.2      0       9
Processing:     1   10   5.5      9     229
Waiting:        1   10   5.5      9     229
Total:          1   10   5.5      9     229

Percentage of the requests served within a certain time (ms)
  50%      9
  66%     10
  75%     11
  80%     11
  90%     13
  95%     14
  98%     17
  99%     19
 100%    229 (longest request)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="upstream工作流程" tabindex="-1"><a class="header-anchor" href="#upstream工作流程" aria-hidden="true">#</a> UpStream工作流程</h3><p>proxy_pass 向上游服务器请求数据共有6个阶段</p><ul><li>初始化</li><li>与上游服务器建立连接</li><li>向上游服务器发送请求</li><li>处理响应头</li><li>处理响应体</li><li>结束</li></ul><p><strong>set_header</strong></p><p>设置header</p><p><strong>proxy_connect_timeout</strong></p><p>与上游服务器连接超时时间、快速失败</p><p><strong>proxy_send_timeout</strong></p><p>定义nginx向后端服务发送请求的间隔时间(不是耗时)。默认60秒，超过这个时间会关闭连接</p><p><strong>proxy_read_timeout</strong></p><p>后端服务给nginx响应的时间，规定时间内后端服务没有给nginx响应，连接会被关闭，nginx返回504 Gateway Time-out。默认60秒</p><h5 id="缓冲区" tabindex="-1"><a class="header-anchor" href="#缓冲区" aria-hidden="true">#</a> 缓冲区</h5><p><strong>proxy_requset_buffering</strong></p><p>是否完全读到请求体之后再向上游服务器发送请求</p><p><strong>proxy_buffering</strong></p><p>是否缓冲上游服务器数据</p><p><strong>proxy_buffers 32 64k;</strong></p><p>缓冲区大小 32个 64k大小内存缓冲块</p><p><strong>proxy_buffer_size</strong></p><p>header缓冲区大小</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>proxy_requset_buffering on;
proxy_buffering on;

proxy_buffer_size 64k;

proxy_buffers 32 128k;
proxy_busy_buffers_size 8k;
proxy_max_temp_file_size 1024m;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>proxy_temp_file_write_size 8k</strong></p><p>当启用从代理服务器到临时文件的响应的缓冲时，一次限制写入临时文件的数据的大小。 默认情况下，大小由proxy_buffer_size和proxy_buffers指令设置的两个缓冲区限制。 临时文件的最大大小由proxy_max_temp_file_size指令设置。</p><p><strong>proxy_max_temp_file_size 1024m;</strong></p><p>临时文件最大值</p><p><strong>proxy_temp_path</strong></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>proxy_temp_path /spool/nginx/proxy_temp 1 2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>a temporary file might look like this:</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/spool/nginx/proxy_temp/7/45/00000123457
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h4 id="对客户端的限制" tabindex="-1"><a class="header-anchor" href="#对客户端的限制" aria-hidden="true">#</a> 对客户端的限制</h4><p>可配置位置</p><ul><li>http</li><li>server</li><li>location</li></ul><p><strong>client_body_buffer_size</strong></p><p>对客户端请求中的body缓冲区大小</p><p>默认32位8k 64位16k</p><p>如果请求体大于配置，则写入临时文件</p><p><strong>client_header_buffer_size</strong></p><p>设置读取客户端请求体的缓冲区大小。 如果请求体大于缓冲区，则将整个请求体或仅将其部分写入临时文件。 默认32位8K。 64位平台16K。</p><p><strong>client_max_body_size 1000M;</strong></p><p>默认1m，如果一个请求的大小超过配置的值，会返回413 (request Entity Too Large)错误给客户端</p><p>将size设置为0将禁用对客户端请求正文大小的检查。</p><p><strong>client_body_timeout</strong></p><p>指定客户端与服务端建立连接后发送 request body 的超时时间。如果客户端在指定时间内没有发送任何内容，Nginx 返回 HTTP 408（Request Timed Out）</p><p><strong>client_header_timeout</strong></p><p>客户端向服务端发送一个完整的 request header 的超时时间。如果客户端在指定时间内没有发送一个完整的 request header，Nginx 返回 HTTP 408（Request Timed Out）。</p><p><strong>client_body_temp_path</strong> <em>path</em><code> [</code><em>level1</em><code> [</code><em>level2</em><code> [</code><em>level3</em>\`]]]</p><p>在磁盘上客户端的body临时缓冲区位置</p><p><strong>client_body_in_file_only on;</strong></p><p>把body写入磁盘文件，请求结束也不会删除</p><p><strong>client_body_in_single_buffer</strong></p><p>尽量缓冲body的时候在内存中使用连续单一缓冲区，在二次开发时使用<code>$request_body</code>读取数据时性能会有所提高</p><p><strong>client_header_buffer_size</strong></p><p>设置读取客户端请求头的缓冲区大小</p><p>如果一个请求行或者一个请求头字段不能放入这个缓冲区，那么就会使用large_client_header_buffers</p><p><strong>large_client_header_buffers</strong></p><p>默认8k</p><h3 id="反向代理中的容错机制" tabindex="-1"><a class="header-anchor" href="#反向代理中的容错机制" aria-hidden="true">#</a> 反向代理中的容错机制</h3><h4 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h4>`,112),N={href:"https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/",target:"_blank",rel:"noopener noreferrer"},$={href:"http://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_bind",target:"_blank",rel:"noopener noreferrer"},P=i(`<p><strong>proxy_timeout</strong></p><h4 id="重试机制" tabindex="-1"><a class="header-anchor" href="#重试机制" aria-hidden="true">#</a> 重试机制</h4><p><strong>proxy_next_upstream</strong></p><p>作用：</p><p>当后端服务器返回指定的错误时，将请求传递到其他服务器。</p><p><code>error</code>与服务器建立连接，向其传递请求或读取响应头时发生错误;</p><p><code>timeout</code>在与服务器建立连接，向其传递请求或读取响应头时发生超时;</p><p><code>invalid_header</code>服务器返回空的或无效的响应;</p><p><code>http_500</code>服务器返回代码为500的响应;</p><p><code>http_502</code>服务器返回代码为502的响应;</p><p><code>http_503</code>服务器返回代码为503的响应;</p><p><code>http_504</code>服务器返回代码504的响应;</p><p><code>http_403</code>服务器返回代码为403的响应;</p><p><code>http_404</code>服务器返回代码为404的响应;</p><p><code>http_429</code>服务器返回代码为429的响应;</p><p>不了解这个机制，在日常开发web服务的时候，就可能会踩坑。</p><p>比如有这么一个场景：一个用于导入数据的web页面，上传一个excel，通过读取、处理excel，向数据库中插入数据，处理时间较长（如1分钟），且为同步操作（即处理完成后才返回结果）。暂且不论这种方式的好坏，若nginx配置的响应等待时间（proxy_read_timeout）为30秒，就会触发超时重试，将请求又打到另一台。如果处理中没有考虑到重复数据的场景，就会发生数据多次重复插入！（当然，这种场景，内网可以通过机器名访问该服务器进行操作，就可以绕过nginx了，不过外网就没办法了。）</p><h3 id="获取客户端真实ip" tabindex="-1"><a class="header-anchor" href="#获取客户端真实ip" aria-hidden="true">#</a> 获取客户端真实IP</h3><h4 id="x-real-ip" tabindex="-1"><a class="header-anchor" href="#x-real-ip" aria-hidden="true">#</a> X-Real-IP</h4><p>额外模块，不推荐使用</p><h4 id="setheader" tabindex="-1"><a class="header-anchor" href="#setheader" aria-hidden="true">#</a> setHeader</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>proxy_set_header X-Forwarded-For $remote_addr;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="gzip" tabindex="-1"><a class="header-anchor" href="#gzip" aria-hidden="true">#</a> Gzip</h3><p>作用域 <code>http, server, location</code></p><h5 id="gzip-on" tabindex="-1"><a class="header-anchor" href="#gzip-on" aria-hidden="true">#</a> gzip on;</h5><p>开关，默认关闭</p><h5 id="gzip-buffers-32-4k-16-8k" tabindex="-1"><a class="header-anchor" href="#gzip-buffers-32-4k-16-8k" aria-hidden="true">#</a> gzip_buffers 32 4k|16 8k</h5><p>缓冲区大小</p><p><strong>gzip_comp_level</strong> 1；</p><p>压缩等级 1-9，数字越大压缩比越高</p><h5 id="gzip-http-version-1-1" tabindex="-1"><a class="header-anchor" href="#gzip-http-version-1-1" aria-hidden="true">#</a> gzip_http_version 1.1;</h5><p>使用gzip的最小版本</p><h5 id="gzip-min-length" tabindex="-1"><a class="header-anchor" href="#gzip-min-length" aria-hidden="true">#</a> gzip_min_length</h5><p>设置将被gzip压缩的响应的最小长度。 长度仅由“Content-Length”响应报头字段确定。</p><h5 id="gzip-proxied-多选" tabindex="-1"><a class="header-anchor" href="#gzip-proxied-多选" aria-hidden="true">#</a> gzip_proxied 多选</h5><p>off 为不做限制</p><p>作为反向代理时，针对上游服务器返回的头信息进行压缩</p><p>expired - 启用压缩，如果header头中包含 &quot;Expires&quot; 头信息 no-cache - 启用压缩，如果header头中包含 &quot;Cache-Control:no-cache&quot; 头信息 no-store - 启用压缩，如果header头中包含 &quot;Cache-Control:no-store&quot; 头信息 private - 启用压缩，如果header头中包含 &quot;Cache-Control:private&quot; 头信息 no_last_modified - 启用压缩,如果header头中不包含 &quot;Last-Modified&quot; 头信息 no_etag - 启用压缩 ,如果header头中不包含 &quot;ETag&quot; 头信息 auth - 启用压缩 , 如果header头中包含 &quot;Authorization&quot; 头信息 any - 无条件启用压缩</p><h5 id="gzip-vary-on" tabindex="-1"><a class="header-anchor" href="#gzip-vary-on" aria-hidden="true">#</a> gzip_vary on;</h5><p>增加一个header，适配老的浏览器 <code>Vary: Accept-Encoding</code></p><h5 id="gzip-types" tabindex="-1"><a class="header-anchor" href="#gzip-types" aria-hidden="true">#</a> gzip_types</h5><p>哪些mime类型的文件进行压缩</p><h5 id="gzip-disable" tabindex="-1"><a class="header-anchor" href="#gzip-disable" aria-hidden="true">#</a> gzip_disable</h5><p>禁止某些浏览器使用gzip</p><h5 id="完整实例" tabindex="-1"><a class="header-anchor" href="#完整实例" aria-hidden="true">#</a> 完整实例</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  gzip on;
  gzip_buffers 16 8k;
  gzip_comp_level 6;
  gzip_http_version 1.1;
  gzip_min_length 256;
  gzip_proxied any;
  gzip_vary on;
  gzip_types text/plain application/x-javascript text/css application/xml;
  gzip_types
    text/xml application/xml application/atom+xml application/rss+xml application/xhtml+xml image/svg+xml
    text/javascript application/javascript application/x-javascript
    text/x-json application/json application/x-web-app-manifest+json
    text/css text/plain text/x-component
    font/opentype application/x-font-ttf application/vnd.ms-fontobject
    image/x-icon;
  gzip_disable &quot;MSIE [1-6]\\.(?!.*SV1)&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HTTP/1.1 200
Server: nginx/1.21.6
Date: Wed, 18 May 2022 17:42:35 GMT
Content-Type: text/html;charset=utf-8
Content-Length: 7832
Connection: keep-alive
Keep-Alive: timeout=65
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ngx-http-gunzip-module" tabindex="-1"><a class="header-anchor" href="#ngx-http-gunzip-module" aria-hidden="true">#</a> ngx_http_gunzip_module</h3><p>帮助不支持gzip的客户端解压本地文件</p><h4 id="http-gzip-static-module" tabindex="-1"><a class="header-anchor" href="#http-gzip-static-module" aria-hidden="true">#</a> http_gzip_static_module</h4><p>需要重新编译nginx</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./configure --with-http_gzip_static_module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="brotli" tabindex="-1"><a class="header-anchor" href="#brotli" aria-hidden="true">#</a> Brotli</h3><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4><ul><li><p>官网</p><ul><li><code>https://github.com/google/ngx_brotli</code></li><li><code>https://codeload.github.com/google/brotli/tar.gz/refs/tags/v1.0.9</code></li></ul></li><li><p>下载 两个项目</p></li><li><p>解压缩</p></li></ul><p>模块化编译</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./configure --with-compat --add-dynamic-module<span class="token operator">=</span>/root/ngx_brotli-1.0.0rc <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--add-dynamic-module=brotli目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>make</p></li><li><p>将<code>ngx_http_brotli_filter_module.so</code> <code>ngx_http_brotli_static_module.so</code>拷贝到<code>/usr/local/nginx/modules/</code></p></li><li><p>复制nginx主程序</p></li><li><p>配置文件中添加</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>load_module &quot;/usr/local/nginx/modules/ngx_http_brotli_filter_module.so&quot;;
load_module &quot;/usr/local/nginx/modules/ngx_http_brotli_static_module.so&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brotli on;
    brotli_static on;
	brotli_comp_level 6;
	brotli_buffers 16 8k;
	brotli_min_length 20;
	brotli_types text/plain text/css text/javascript application/javascript text/xml application/xml application/xml+rss application/json image/jpeg image/gif image/png;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>测试</li></ul><p>默认http协议是没有br的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -H &#39;Accept-Encoding: gzip&#39; -I http://localhost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="合并客户端请求" tabindex="-1"><a class="header-anchor" href="#合并客户端请求" aria-hidden="true">#</a> 合并客户端请求</h3><p>Concat模块</p><p>Tengine</p><p>Nginx官方介绍</p>`,69),L={href:"https://www.nginx.com/resources/wiki/modules/concat/",target:"_blank",rel:"noopener noreferrer"},E=n("p",null,"git地址",-1),H={href:"https://github.com/alibaba/nginx-http-concat",target:"_blank",rel:"noopener noreferrer"},A=i(`<ul><li>安装</li></ul><p>下载源码解压缩编译安装</p><ul><li>配置</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    concat on;
    concat_max_files 30;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="资源静态化" tabindex="-1"><a class="header-anchor" href="#资源静态化" aria-hidden="true">#</a> 资源静态化</h3><p>•高并发系统资源静态化方案</p><p>•一致性问题</p><p>•合并文件输出</p><p>•集群文件同步</p><h3 id="ssi合并服务器端文件" tabindex="-1"><a class="header-anchor" href="#ssi合并服务器端文件" aria-hidden="true">#</a> SSI合并服务器端文件</h3><p>官方文档</p>`,11),D={href:"http://nginx.org/en/docs/http/ngx_http_ssi_module.html",target:"_blank",rel:"noopener noreferrer"},R=i(`<h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h4><p><strong>ssi_min_file_chunk</strong></p><p>向磁盘存储并使用sendfile发送，文件大小最小值</p><p><strong>ssi_last_modified</strong></p><p>是否保留lastmodified</p><p><strong>ssi_silent_errors</strong></p><p>不显示逻辑错误</p><p><strong>ssi_value_length</strong></p><p>限制脚本参数最大长度</p><p><strong>ssi_types</strong></p><p>默认text/html;如果需要其他mime类型 需要设置</p><h4 id="include-file" tabindex="-1"><a class="header-anchor" href="#include-file" aria-hidden="true">#</a> include file</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!--# include file=&quot;footer.html&quot; --&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>静态文件直接引用</p><h4 id="include-virtual" tabindex="-1"><a class="header-anchor" href="#include-virtual" aria-hidden="true">#</a> include virtual</h4><p>可以指向location，而不一定是具体文件</p><h4 id="include-wait" tabindex="-1"><a class="header-anchor" href="#include-wait" aria-hidden="true">#</a> include wait</h4><p>阻塞请求</p><h4 id="include-set" tabindex="-1"><a class="header-anchor" href="#include-set" aria-hidden="true">#</a> include set</h4><p>在virtual基础上设置变量</p><h4 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h4><p>设置临时变量</p><h4 id="block" tabindex="-1"><a class="header-anchor" href="#block" aria-hidden="true">#</a> block</h4><p>可以声明一个ssi的命令块，里面可以包裹其他命令</p><h4 id="config-errmsg" tabindex="-1"><a class="header-anchor" href="#config-errmsg" aria-hidden="true">#</a> config errmsg</h4><p>在模板中配置报错情况</p><h4 id="config-timefmt" tabindex="-1"><a class="header-anchor" href="#config-timefmt" aria-hidden="true">#</a> config timefmt</h4><p>日期格式化</p><h4 id="echo" tabindex="-1"><a class="header-anchor" href="#echo" aria-hidden="true">#</a> echo</h4><p>直接输出变量</p><ul><li>var变量名称</li><li>encoding 是否使用特殊编码格式</li><li>default 变量没有值的时候使用默认值</li></ul><h4 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h4><p>逻辑判断</p><h3 id="rsync" tabindex="-1"><a class="header-anchor" href="#rsync" aria-hidden="true">#</a> rsync</h3>`,34),M={href:"https://www.samba.org/ftp/rsync/rsync.html",target:"_blank",rel:"noopener noreferrer"},I=i(`<p>remote synchronize是一个远程数据同步工具，可通过 LAN/WAN 快速同步多台主机之间的文件。也可以使用 rsync 同步本地硬盘中的不同目录。 rsync 是用于替代 rcp 的一个工具，rsync 使用所谓的 rsync算法 进行数据同步，这种算法只传送两个文件的不同部分，而不是每次都整份传送，因此速度相当快。</p><p>rsync 基于inotify 开发</p><p>Rsync有三种模式：</p><ul><li>本地模式（类似于cp命令）</li><li>远程模式（类似于scp命令）</li><li>守护进程（socket进程：是rsync的重要功能）</li></ul><h2 id="rsync-常用选项" tabindex="-1"><a class="header-anchor" href="#rsync-常用选项" aria-hidden="true">#</a> rsync 常用选项</h2><table><thead><tr><th style="text-align:left;">选项</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:left;">-a</td><td style="text-align:left;">包含-rtplgoD</td></tr><tr><td style="text-align:left;">-r</td><td style="text-align:left;">同步目录时要加上，类似cp时的-r选项</td></tr><tr><td style="text-align:left;">-v</td><td style="text-align:left;">同步时显示一些信息，让我们知道同步的过程</td></tr><tr><td style="text-align:left;">-l</td><td style="text-align:left;">保留软连接</td></tr><tr><td style="text-align:left;">-L</td><td style="text-align:left;">加上该选项后，同步软链接时会把源文件给同步</td></tr><tr><td style="text-align:left;">-p</td><td style="text-align:left;">保持文件的权限属性</td></tr><tr><td style="text-align:left;">-o</td><td style="text-align:left;">保持文件的属主</td></tr><tr><td style="text-align:left;">-g</td><td style="text-align:left;">保持文件的属组</td></tr><tr><td style="text-align:left;">-D</td><td style="text-align:left;">保持设备文件信息</td></tr><tr><td style="text-align:left;">-t</td><td style="text-align:left;">保持文件的时间属性</td></tr><tr><td style="text-align:left;">–delete</td><td style="text-align:left;">删除DEST中SRC没有的文件</td></tr><tr><td style="text-align:left;">–exclude</td><td style="text-align:left;">过滤指定文件，如–exclude “logs”会把文件名包含logs的文件或者目录过滤掉，不同步</td></tr><tr><td style="text-align:left;">-P</td><td style="text-align:left;">显示同步过程，比如速率，比-v更加详细</td></tr><tr><td style="text-align:left;">-u</td><td style="text-align:left;">加上该选项后，如果DEST中的文件比SRC新，则不同步</td></tr><tr><td style="text-align:left;">-z</td><td style="text-align:left;">传输时压缩</td></tr></tbody></table><h4 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h4><p>两端安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install -y rsync
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h3><h4 id="密码文件" tabindex="-1"><a class="header-anchor" href="#密码文件" aria-hidden="true">#</a> 密码文件</h4><p>创建文件<code>/etc/rsync.password</code></p><p>内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hello:123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改权限</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>chmod 600 /etc/rsync.password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>auth users = sgg
secrets file = /etc/rsyncd.pwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="开机启动" tabindex="-1"><a class="header-anchor" href="#开机启动" aria-hidden="true">#</a> 开机启动</h4><p>在<code>/etc/rc.local</code>文件中添加</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rsync --daemon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>修改权限</li></ul><p>echo &quot;sgg:111&quot; &gt;&gt; /etc/rsyncd.passwd</p><h4 id="查看远程目录" tabindex="-1"><a class="header-anchor" href="#查看远程目录" aria-hidden="true">#</a> 查看远程目录</h4><p>rsync --list-only 192.168.44.104::www/</p><h4 id="拉取数据到指定目录" tabindex="-1"><a class="header-anchor" href="#拉取数据到指定目录" aria-hidden="true">#</a> 拉取数据到指定目录</h4><p>rsync -avz rsync://192.168.44.104:873/www</p><p>rsync -avz 192.168.44.104::www/ /root/w</p><h5 id="使用ssh方式" tabindex="-1"><a class="header-anchor" href="#使用ssh方式" aria-hidden="true">#</a> 使用SSH方式</h5><p>rsync -avzP /usr/local/nginx/html/ <a href="mailto:root@192.168.44.105">root@192.168.44.105</a>:/www/</p><h4 id="客户端免密" tabindex="-1"><a class="header-anchor" href="#客户端免密" aria-hidden="true">#</a> 客户端免密</h4><p>客户端只放密码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo &quot;111&quot; &gt;&gt; /etc/rsyncd.passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时在客户端已经可以配合脚本实现定时同步了</p><h4 id="如何实现推送" tabindex="-1"><a class="header-anchor" href="#如何实现推送" aria-hidden="true">#</a> 如何实现推送？</h4><p>修改配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rsync -avz --password-file=/etc/rsyncd.passwd.client /usr/local/nginx/html/ rsync://sgg@192.168.44.105:/www
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>--delete 删除目标目录比源目录多余文件</code></p><h4 id="实时推送" tabindex="-1"><a class="header-anchor" href="#实时推送" aria-hidden="true">#</a> 实时推送</h4><p>推送端安装inotify</p><p>依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install -y automake
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget http://github.com/downloads/rvoicilas/inotify-tools/inotify-tools-3.14.tar.gz
./configure --prefix=/usr/local/inotify
make &amp;&amp; make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>监控目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/local/inotify/bin/inotifywait -mrq --timefmt &#39;%Y-%m-%d %H:%M:%S&#39; --format &#39;%T %w%f %e&#39; -e close_write,modify,delete,create,attrib,move //usr/local/nginx/html/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="简单自动化脚本" tabindex="-1"><a class="header-anchor" href="#简单自动化脚本" aria-hidden="true">#</a> 简单自动化脚本</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

/usr/local/inotify/bin/inotifywait <span class="token parameter variable">-mrq</span> <span class="token parameter variable">--timefmt</span> <span class="token string">&#39;%d/%m/%y %H:%M&#39;</span> <span class="token parameter variable">--format</span> <span class="token string">&#39;%T %w%f %e&#39;</span> <span class="token parameter variable">-e</span> close_write,modify,delete,create,attrib,move //usr/local/nginx/html/ <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> <span class="token function">file</span>
<span class="token keyword">do</span>
       
        <span class="token function">rsync</span> <span class="token parameter variable">-az</span> <span class="token parameter variable">--delete</span> --password-file<span class="token operator">=</span>/etc/rsyncd.passwd.client /usr/local/nginx/html/ sgg@192.168.44.102::ftp/
<span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="inotify常用参数" tabindex="-1"><a class="header-anchor" href="#inotify常用参数" aria-hidden="true">#</a> inotify常用参数</h4><table><thead><tr><th>参数</th><th>说明</th><th>含义</th></tr></thead><tbody><tr><td>-r</td><td>--recursive</td><td>#递归查询目录</td></tr><tr><td>-q</td><td>--quiet</td><td>#打印很少的信息，仅仅打印监控事件信息</td></tr><tr><td>-m</td><td>--monitor</td><td>#始终保持事件监听状态</td></tr><tr><td>--excludei</td><td></td><td>#排除文件或目录时，不区分大小写</td></tr><tr><td>--timefmt</td><td></td><td>#指定事件输出格式</td></tr><tr><td>--format</td><td></td><td>#打印使用指定的输出类似格式字符串</td></tr><tr><td>-e</td><td>--event[ -e|--event ... ]accessmodifyattribcloseopenmove_tomove createdeleteumount</td><td>#通过此参数可以指定要监控的事件 #文件或目录被读取#文件或目录的内容被修改#文件或目录属性被改变#文件或目录封闭，无论读/写模式#文件或目录被打开#文件或目录被移动至另外一个目录#文件或目录被移动另一个目录或从另一个目录移动至当前目录#文件或目录被创建在当前目录#文件或目录被删除#文件系统被卸载</td></tr></tbody></table><h2 id="多级缓存" tabindex="-1"><a class="header-anchor" href="#多级缓存" aria-hidden="true">#</a> 多级缓存</h2><h4 id="静态资源缓存" tabindex="-1"><a class="header-anchor" href="#静态资源缓存" aria-hidden="true">#</a> 静态资源缓存</h4><h4 id="浏览器缓存" tabindex="-1"><a class="header-anchor" href="#浏览器缓存" aria-hidden="true">#</a> 浏览器缓存</h4><h5 id="什么时候可以用缓存" tabindex="-1"><a class="header-anchor" href="#什么时候可以用缓存" aria-hidden="true">#</a> 什么时候可以用缓存？</h5><ol><li>不常改变的内容</li><li>过期时间</li><li>针对post/get请求都可以</li><li>存储位置</li><li>磁盘使用空间限制</li></ol><p>观察京东缓存及加载速度</p><ul><li>deskcache</li></ul><p>字面理解是从内存中，其实也是字面的含义，这个资源是直接从内存中拿到的，<strong>不会请求服务器</strong>一般已经加载过该资源且缓存在了内存当中，当关闭该页面时，此资源就被内存释放掉了，再次重新打开相同页面时不会出现from memory cache的情况</p><ul><li>memorycache</li></ul><p>是从磁盘当中取出的，也是在已经在之前的某个时间加载过该资源，<strong>不会请求服务器</strong>但是此资源不会随着该页面的关闭而释放掉，因为是存在硬盘当中的，下次打开仍会from disk cache</p><h5 id="age" tabindex="-1"><a class="header-anchor" href="#age" aria-hidden="true">#</a> Age</h5><p>是CDN添加的属性表示在CDN中缓存了多少秒</p><h5 id="via" tabindex="-1"><a class="header-anchor" href="#via" aria-hidden="true">#</a> <strong>via</strong></h5><p>用来标识CDN缓存经历了哪些服务器，缓存是否命中，使用的协议</p><h4 id="nginx默认缓存" tabindex="-1"><a class="header-anchor" href="#nginx默认缓存" aria-hidden="true">#</a> Nginx默认缓存</h4><p>Nginx版本不同会默认配置</p><h4 id="强制缓存与协商缓存" tabindex="-1"><a class="header-anchor" href="#强制缓存与协商缓存" aria-hidden="true">#</a> 强制缓存与协商缓存</h4><p>强制缓存：直接从本机读取，不请求服务器</p><p>协商缓存：发送请求header中携带Last-Modified，服务器可能会返回304 Not Modified</p><h4 id="浏览器强制缓存" tabindex="-1"><a class="header-anchor" href="#浏览器强制缓存" aria-hidden="true">#</a> 浏览器强制缓存</h4><h5 id="cache-control" tabindex="-1"><a class="header-anchor" href="#cache-control" aria-hidden="true">#</a> <strong>cache-control</strong></h5><p>http1.1的规范，使用max-age表示文件可以在浏览器中缓存的时间以秒为单位</p><table><thead><tr><th>标记</th><th>类型</th><th>功能</th></tr></thead><tbody><tr><td>public</td><td>响应头</td><td>响应的数据可以被缓存，客户端和代理层都可以缓存</td></tr><tr><td>private</td><td>响应头</td><td>可私有缓存，客户端可以缓存，代理层不能缓存（CDN，proxy_pass）</td></tr><tr><td>no-cache</td><td>请求头</td><td>可以使用本地缓存，但是必须发送请求到服务器回源验证</td></tr><tr><td>no-store</td><td>请求和响应</td><td>应禁用缓存</td></tr><tr><td>max-age</td><td>请求和响应</td><td>文件可以在浏览器中缓存的时间以秒为单位</td></tr><tr><td>s-maxage</td><td>请求和响应</td><td>用户代理层缓存，CDN下发，当客户端数据过期时会重新校验</td></tr><tr><td>max-stale</td><td>请求和响应</td><td>缓存最大使用时间，如果缓存过期，但还在这个时间范围内则可以使用缓存数据</td></tr><tr><td>min-fresh</td><td>请求和响应</td><td>缓存最小使用时间，</td></tr><tr><td>must-revalidate</td><td>请求和响应</td><td>当缓存过期后，必须回源重新请求资源。比no-cache更严格。因为HTTP 规范是允许客户端在某些特殊情况下直接使用过期缓存的，比如校验请求发送失败的时候。那么带有must-revalidate的缓存必须校验，其他条件全部失效。</td></tr><tr><td>proxy-revalidate</td><td>请求和响应</td><td>和must-revalidate类似，只对CDN这种代理服务器有效，客户端遇到此头，需要回源验证</td></tr><tr><td>stale-while-revalidate</td><td>响应</td><td>表示在指定时间内可以先使用本地缓存，后台进行异步校验</td></tr><tr><td>stale-if-error</td><td>响应</td><td>在指定时间内，重新验证时返回状态码为5XX的时候，可以用本地缓存</td></tr><tr><td>only-if-cached</td><td>响应</td><td>那么只使用缓存内容，如果没有缓存 则504 getway timeout</td></tr></tbody></table><p>在浏览器和服务器端验证文件是否过期的时候，浏览器在二次请求的时候会携带IF-Modified-Since属性</p><h5 id="expires" tabindex="-1"><a class="header-anchor" href="#expires" aria-hidden="true">#</a> Expires</h5><p>过期时间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>expires 30s;   #缓存30秒
expires 30m;  #缓存30分钟   
expires 2h;     #缓存2小时
expires 30d;    #缓存30天
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="协商缓存" tabindex="-1"><a class="header-anchor" href="#协商缓存" aria-hidden="true">#</a> 协商缓存</h4><h5 id="last-modified" tabindex="-1"><a class="header-anchor" href="#last-modified" aria-hidden="true">#</a> <strong>last-modified</strong></h5><h5 id="etag" tabindex="-1"><a class="header-anchor" href="#etag" aria-hidden="true">#</a> <strong>etag</strong></h5><p>http1.1支持</p><p>在HTTP协议中If-Modified-Since和If-None-Match分别对应Last-Modified和ETag</p><p>Entity Tag 的缩写，中文译过来就是实体标签的意思.</p><p>HTTP中并没有指定如何生成ETag，哈希是比较理想的选择。</p><p>在计算Etag的时候，会产生CPU的耗费，所以也可以用时间戳，但这样直接使用Last-Modified即可。</p><p>ETag 用来校验用户请求的资源是否有变化，作用和lastmodified很像，区别是lastmodified精确到秒，ETag可以用hash算法来生成更精确的比对内容。</p><p>当用户首次请求资源的时候返回给用户数据和200状态码并生成ETag，再次请求的时候服务器比对ETag，没有发生变化的话返回304</p><p>Cache-Control直接是通过不请求来实现，而ETag是会发请求的，只不过服务器根据请求的东西的内容有无变化来判断是否返回请求的资源</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结：</h3><h4 id="cache-control-expires-强制缓存" tabindex="-1"><a class="header-anchor" href="#cache-control-expires-强制缓存" aria-hidden="true">#</a> cache-control expires 强制缓存</h4><p>页面首次打开，直接读取缓存数据，刷新，会向服务器发起请求</p><h4 id="etag-lastmodify-协商缓存" tabindex="-1"><a class="header-anchor" href="#etag-lastmodify-协商缓存" aria-hidden="true">#</a> etag lastmodify 协商缓存</h4><p>没发生变化 返回304 不发送数据</p><h5 id="last-modified-与ssi的冲突" tabindex="-1"><a class="header-anchor" href="#last-modified-与ssi的冲突" aria-hidden="true">#</a> last-modified 与ssi的冲突</h5><h4 id="浏览器缓存原则" tabindex="-1"><a class="header-anchor" href="#浏览器缓存原则" aria-hidden="true">#</a> 浏览器缓存原则</h4><ul><li><p>多级集群负载时last-modified必须保持一致</p></li><li><p>还有一些场景下我们希望禁用浏览器缓存。比如轮训api上报数据数据</p></li><li><p>浏览器缓存很难彻底禁用，大家的做法是加版本号，随机数等方法。</p></li><li><p>只缓存200响应头的数据，像3XX这类跳转的页面不需要缓存。</p></li><li><p>对于js，css这类可以缓存很久的数据，可以通过加版本号的方式更新内容</p></li><li><p>不需要强一致性的数据，可以缓存几秒</p></li><li><p>异步加载的接口数据，可以使用ETag来校验。</p></li><li><p>在服务器添加Server头，有利于排查错误</p></li><li><p>分为手机APP和Client以及是否遵循http协议</p></li><li><p>在没有联网的状态下可以展示数据</p></li><li><p>流量消耗过多</p></li><li><p>提前下发 避免秒杀时同时下发数据造成流量短时间暴增</p></li><li><p>兜底数据 在服务器崩溃和网络不可用的时候展示</p></li><li><p>临时缓存 退出即清理</p></li><li><p>固定缓存 展示框架这种，可能很长时间不会更新，可用随客户端下发</p><ul><li><strong>首页</strong>有的时候可以看做是框架 应该禁用缓存，以保证加载的资源都是最新的</li></ul></li><li><p>父子连接 页面跳转时有一部分内容不需要重新加载，可用从父菜单带过来</p></li><li><p>预加载 某些逻辑可用判定用户接下来的操作，那么可用异步加载那些资源</p></li><li><p>漂亮的加载过程 异步加载 先展示框架，然后异步加载内容，避免主线程阻塞</p></li></ul><h3 id="geoip" tabindex="-1"><a class="header-anchor" href="#geoip" aria-hidden="true">#</a> GEOip</h3><h4 id="_1-下载数据库" tabindex="-1"><a class="header-anchor" href="#_1-下载数据库" aria-hidden="true">#</a> 1 下载数据库</h4><p>官网需注册登录</p><p>下载数据库</p>`,99),j={href:"http://maxmind.com",target:"_blank",rel:"noopener noreferrer"},O=n("h4",{id:"_2-安装依赖",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-安装依赖","aria-hidden":"true"},"#"),e(" 2 安装依赖")],-1),G=n("h5",{id:"官方git",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#官方git","aria-hidden":"true"},"#"),e(" 官方git")],-1),W={href:"https://github.com/maxmind/libmaxminddb",target:"_blank",rel:"noopener noreferrer"},K=i(`<p>下载后执行编译安装之后</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ echo /usr/local/lib  &gt;&gt; /etc/ld.so.conf.d/local.conf 
$ ldconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nginx模块" tabindex="-1"><a class="header-anchor" href="#nginx模块" aria-hidden="true">#</a> Nginx模块</h4>`,3),U={href:"https://github.com/leev/ngx_http_geoip2_module",target:"_blank",rel:"noopener noreferrer"},B=n("p",null,"更完整的配置可参考官方文档",-1),F={href:"http://nginx.org/en/docs/http/ngx_http_geoip_module.html#geoip_proxy",target:"_blank",rel:"noopener noreferrer"},V=i(`<h4 id="nginx配置" tabindex="-1"><a class="header-anchor" href="#nginx配置" aria-hidden="true">#</a> Nginx配置</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    geoip2 /root/GeoLite2-ASN_20220524/GeoLite2-ASN.mmdb {
$geoip2_country_code country iso_code;
    }
add_header country $geoip2_country_code;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正向代理与反向代理缓存" tabindex="-1"><a class="header-anchor" href="#正向代理与反向代理缓存" aria-hidden="true">#</a> 正向代理与反向代理缓存</h3><h4 id="正向代理配置" tabindex="-1"><a class="header-anchor" href="#正向代理配置" aria-hidden="true">#</a> 正向代理配置</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>proxy_pass $scheme://$host$request_uri;
resolver 8.8.8.8;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代理https请求" tabindex="-1"><a class="header-anchor" href="#代理https请求" aria-hidden="true">#</a> 代理https请求</h4><p>需要第三方模块</p>`,7),X={href:"https://github.com/chobits/ngx_http_proxy_connect_module",target:"_blank",rel:"noopener noreferrer"},J=i(`<p>配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> server {
     listen                         3128;

     # dns resolver used by forward proxying
     resolver                       8.8.8.8;

     # forward proxy for CONNECT request
     proxy_connect;
     proxy_connect_allow            443 563;
     proxy_connect_connect_timeout  10s;
     proxy_connect_read_timeout     10s;
     proxy_connect_send_timeout     10s;

     # forward proxy for non-CONNECT request
     location / {
         proxy_pass http://$host;
         proxy_set_header Host $host;
     }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="proxy缓存" tabindex="-1"><a class="header-anchor" href="#proxy缓存" aria-hidden="true">#</a> proxy缓存</h3><p>官网解释</p>`,4),Y={href:"http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache",target:"_blank",rel:"noopener noreferrer"},Q=i(`<h4 id="配置-1" tabindex="-1"><a class="header-anchor" href="#配置-1" aria-hidden="true">#</a> 配置</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http模块：
proxy_cache_path /ngx_tmp levels=1:2 keys_zone=test_cache:100m inactive=1d max_size=10g ;
location模块：
add_header  Nginx-Cache &quot;$upstream_cache_status&quot;;
proxy_cache test_cache;
proxy_cache_valid 168h;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>proxy_cache_use_stale</strong></p><p>默认off</p><p>在什么时候可以使用过期缓存</p><p>可选<code>error</code> | <code>timeout</code> | <code>invalid_header</code> | <code>updating</code> | <code>http_500</code> | <code>http_502</code> | <code>http_503</code> | <code>http_504</code> | <code>http_403</code> | <code>http_404</code> | <code>http_429</code> | <code>off</code></p><p><strong>proxy_cache_background_update</strong></p><p>默认off</p><p>运行开启子请求更新过期的内容。同时会把过期的内容返回给客户端</p><p><strong>proxy_no_cache</strong> <strong>proxy_cache_bypass</strong></p><p>指定什么时候不使用缓存而直接请求上游服务器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>proxy_no_cache $cookie_nocache $arg_nocache$arg_comment;
proxy_no_cache $http_pragma    $http_authorization;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果这些变量如果存在的话不为空或者不等于0，则不使用缓存</p><p><strong>proxy_cache_convert_head</strong></p><p>默认 on</p><p>是否把head请求转换成get请求后再发送给上游服务器 以便缓存body里的内容</p><p>如果关闭 需要在 <code>cache key</code> 中添加 $request_method 以便区分缓存内容</p><p><strong>proxy_cache_lock</strong></p><p>默认off</p><p>缓存更新锁</p><p><strong>proxy_cache_lock_age</strong></p><p>默认5s</p><p>缓存锁超时时间</p><h4 id="断点续传缓存-range" tabindex="-1"><a class="header-anchor" href="#断点续传缓存-range" aria-hidden="true">#</a> 断点续传缓存 range</h4><p>当有完整的content-length之后即可断点续传</p><p>在反向代理服务器中需向后传递header</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>proxy_set_header Range $http_range;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>proxy_cache_key中增加range</p><p><strong>proxy_cache_max_range_offset</strong></p><p>range最大值，超过之后不做缓存，默认情况下 不需要对单文件较大的资源做缓存</p><p><strong>proxy_cache_methods</strong></p><p>默认 head get</p><p><strong>proxy_cache_min_uses</strong></p><p>默认1</p><p>被请求多少次之后才做缓存</p><p><strong>proxy_cache_path</strong></p><p>path 指定存储目录</p><p>以cache_key取md5值</p><ul><li><strong>levels=1:2</strong></li></ul><p>目录层级数及目录名称位数</p><p>取mdb5后几位</p><p>TMPFS</p><ul><li><strong>use_temp_path</strong></li></ul><p>默认创建缓存文件时，先向缓冲区创建临时文件，再移动到缓存目录</p><p>是否使用缓冲区</p><ul><li><strong>inactive</strong></li></ul><p>指定时间内未被访问过的缓存将被删除</p><h4 id="缓存清理" tabindex="-1"><a class="header-anchor" href="#缓存清理" aria-hidden="true">#</a> 缓存清理</h4><p><strong>purger</strong></p><p>需要第三方模块支持</p>`,50),Z={href:"https://github.com/FRiCKLE/ngx_cache_purge",target:"_blank",rel:"noopener noreferrer"},nn=i(`<p>配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
        location ~ /purge(/.*) {

            proxy_cache_purge  test_cache  $1;
        }
        自定义cachekey
         proxy_cache_key $uri;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>proxy_cache_key</strong></p><p>默认<code>$scheme$proxy_host$request_uri</code></p><p>缓存的key</p><p><strong>proxy_cache_revalidate</strong></p><p>如果缓存过期了，向上游服务器发送“If-Modified-Since” and “If-None-Match来验证是否改变，如果没有就不需要重新下载资源了</p><p><strong>proxy_cache_valid</strong></p><p>可以针对不容http状态码设置缓存过期时间</p><p>不设置状态码会默认200, 301, 302</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>proxy_cache_valid 200 302 10m;
proxy_cache_valid 301      1h;
proxy_cache_valid any      1m;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>any指其他任意状态码</p><h1 id="第二部分-高效" tabindex="-1"><a class="header-anchor" href="#第二部分-高效" aria-hidden="true">#</a> 第二部分 高效</h1><h2 id="nginx内存缓存" tabindex="-1"><a class="header-anchor" href="#nginx内存缓存" aria-hidden="true">#</a> Nginx内存缓存</h2><p><strong>strace</strong></p><p>一般应用为静态文件元数据信息缓存</p><p>sendfile执行过程</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>epoll_wait(8, [{EPOLLIN, {u32=1904243152, u64=140709327827408}}, {EPOLLIN, {u32=1904242704, u64=140709327826960}}], 512, 25215) = 2
recvfrom(10, &quot;GET / HTTP/1.1\\r\\nHost: 192.168.44&quot;..., 1024, 0, NULL, NULL) = 475
stat(&quot;/usr/local/nginx//html/index.html&quot;, {st_mode=S_IFREG|0644, st_size=1429, ...}) = 0
open(&quot;/usr/local/nginx//html/index.html&quot;, O_RDONLY|O_NONBLOCK) = 11
fstat(11, {st_mode=S_IFREG|0644, st_size=1429, ...}) = 0
writev(10, [{iov_base=&quot;HTTP/1.1 200 OK\\r\\nServer: nginx/1&quot;..., iov_len=263}], 1) = 263
sendfile(10, 11, [0] =&gt; [1429], 1429)   = 1429
write(4, &quot;192.168.44.1 - - [27/May/2022:14&quot;..., 193) = 193
close(11) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>open_file_cache</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>open_file_cache max=500 inactive=60s
open_file_cache_min_uses 1; 
open_file_cache_valid 60s; 
open_file_cache_errors on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>max</strong>缓存最大数量，超过数量后会使用LRU淘汰</p><p><strong>inactive</strong> 指定时间内未被访问过的缓存将被删除</p><p><strong>pen_file_cache_min_uses</strong></p><p>被访问到多少次后会开始缓存</p><p><strong>open_file_cache_valid</strong></p><p>间隔多长时间去检查文件是否有变化</p><p><strong>open_file_cache_errors</strong></p><p>对错误信息是否缓存</p><h2 id="nginx外置缓存缓存" tabindex="-1"><a class="header-anchor" href="#nginx外置缓存缓存" aria-hidden="true">#</a> Nginx外置缓存缓存</h2>`,29),en={href:"http://nginx.org/en/docs/http/ngx_http_memcached_module.html",target:"_blank",rel:"noopener noreferrer"},sn=i(`<h3 id="error-page" tabindex="-1"><a class="header-anchor" href="#error-page" aria-hidden="true">#</a> error_page</h3><p>指定状态码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	error_page 404 =302 http://www.atguigu.com;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认指向location</p><h3 id="匿名location" tabindex="-1"><a class="header-anchor" href="#匿名location" aria-hidden="true">#</a> 匿名location</h3><h3 id="nginx-memcached" tabindex="-1"><a class="header-anchor" href="#nginx-memcached" aria-hidden="true">#</a> nginx + memcached</h3><h4 id="memcached安装" tabindex="-1"><a class="header-anchor" href="#memcached安装" aria-hidden="true">#</a> memcached安装</h4><p><code>yum -y install memcached</code></p><p>默认配置文件在</p><p><code>/etc/sysconfig/memcached</code></p><p>查看状态</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>memcached-tool 127.0.0.1:11211  stats
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="nginx配置-1" tabindex="-1"><a class="header-anchor" href="#nginx配置-1" aria-hidden="true">#</a> nginx配置</h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>    
   <span class="token directive"><span class="token keyword">upstream</span> backend</span> <span class="token punctuation">{</span>
    
<span class="token comment">#   server 192.168.44.102 weight=8 down;</span>
   <span class="token directive"><span class="token keyword">server</span> 192.168.44.104:8080</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>

        <span class="token directive"><span class="token keyword">set</span>            <span class="token variable">$memcached_key</span> <span class="token string">&quot;<span class="token variable">$uri</span>?<span class="token variable">$args</span>&quot;</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">memcached_pass</span> 127.0.0.1:11211</span><span class="token punctuation">;</span>

	<span class="token directive"><span class="token keyword">add_header</span> X-Cache-Satus HIT</span><span class="token punctuation">;</span>

	<span class="token directive"><span class="token keyword">add_header</span> Content-Type <span class="token string">&#39;text/html; charset=utf-8&#39;</span></span><span class="token punctuation">;</span> <span class="token comment"># 强制响应数据格式为html</span>



	<span class="token comment"># root   html;</span>
        <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx-redis" tabindex="-1"><a class="header-anchor" href="#nginx-redis" aria-hidden="true">#</a> nginx + redis</h3><h4 id="redis安装" tabindex="-1"><a class="header-anchor" href="#redis安装" aria-hidden="true">#</a> Redis安装</h4><p>7.0下载地址</p>`,17),an={href:"https://codeload.github.com/redis/redis/tar.gz/refs/tags/7.0.0",target:"_blank",rel:"noopener noreferrer"},tn=i(`<h4 id="安装-2" tabindex="-1"><a class="header-anchor" href="#安装-2" aria-hidden="true">#</a> 安装</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>依赖
yum install -y tcl-devel

解压
make
make install 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis2-nginx-module" tabindex="-1"><a class="header-anchor" href="#redis2-nginx-module" aria-hidden="true">#</a> redis2-nginx-module</h3><p>redis2-nginx-module是一个支持 Redis 2.0 协议的 Nginx upstream 模块，它可以让 Nginx 以非阻塞方式直接防问远方的 Redis 服务，同时支持 TCP 协议和 Unix Domain Socket 模式，并且可以启用强大的 Redis 连接池功能。</p>`,4),ln={href:"https://www.nginx.com/resources/wiki/modules/redis2/",target:"_blank",rel:"noopener noreferrer"},dn={href:"https://github.com/openresty/redis2-nginx-module",target:"_blank",rel:"noopener noreferrer"},rn=i(`<p>redis快速安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install epel-release
yum install -y redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>redis2-nginx-module 安装</p><h4 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> test</h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> = /foo</span> <span class="token punctuation">{</span>

<span class="token directive"><span class="token keyword">default_type</span> text/html</span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">redis2_query</span> auth <span class="token number">123123</span></span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">set</span> <span class="token variable">$value</span> <span class="token string">&#39;first&#39;</span></span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">redis2_query</span> set one <span class="token variable">$value</span></span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">redis2_pass</span> 192.168.199.161:6379</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get</h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> = /get</span> <span class="token punctuation">{</span>

<span class="token directive"><span class="token keyword">default_type</span> text/html</span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">redis2_pass</span> 192.168.199.161:6379</span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">redis2_query</span> auth <span class="token number">123123</span></span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">set_unescape_uri</span> <span class="token variable">$key</span> <span class="token variable">$arg_key</span></span><span class="token punctuation">;</span>  <span class="token comment"># this requires ngx_set_misc</span>

     <span class="token directive"><span class="token keyword">redis2_query</span> get <span class="token variable">$key</span></span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="set-1" tabindex="-1"><a class="header-anchor" href="#set-1" aria-hidden="true">#</a> set</h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># GET /set?key=one&amp;val=first%20value</span>

<span class="token directive"><span class="token keyword">location</span> = /set</span> <span class="token punctuation">{</span>

<span class="token directive"><span class="token keyword">default_type</span> text/html</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">redis2_pass</span> 192.168.199.161:6379</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">redis2_query</span> auth <span class="token number">123123</span></span><span class="token punctuation">;</span>
 

     <span class="token directive"><span class="token keyword">set_unescape_uri</span> <span class="token variable">$key</span> <span class="token variable">$arg_key</span></span><span class="token punctuation">;</span>  <span class="token comment"># this requires ngx_set_misc</span>

     <span class="token directive"><span class="token keyword">set_unescape_uri</span> <span class="token variable">$val</span> <span class="token variable">$arg_val</span></span><span class="token punctuation">;</span>  <span class="token comment"># this requires ngx_set_misc</span>

     <span class="token directive"><span class="token keyword">redis2_query</span> set <span class="token variable">$key</span> <span class="token variable">$val</span></span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pipeline" tabindex="-1"><a class="header-anchor" href="#pipeline" aria-hidden="true">#</a> pipeline</h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>     <span class="token directive"><span class="token keyword">set</span> <span class="token variable">$value</span> <span class="token string">&#39;first&#39;</span></span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">redis2_query</span> set one <span class="token variable">$value</span></span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">redis2_query</span> get one</span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">redis2_query</span> set one two</span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">redis2_query</span> get one</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">redis2_query</span> del key1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> list</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>    redis2_query lpush key1 C<span class="token punctuation">;</span>

    redis2_query lpush key1 B<span class="token punctuation">;</span>

    redis2_query lpush key1 A<span class="token punctuation">;</span>

redis2_query lrange key1 <span class="token number">0</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="集群" tabindex="-1"><a class="header-anchor" href="#集群" aria-hidden="true">#</a> 集群</h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> redis_cluster</span> <span class="token punctuation">{</span>

     <span class="token directive"><span class="token keyword">server</span> 192.168.199.161:6379</span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">server</span> 192.168.199.161:6379</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">location</span> = /redis</span> <span class="token punctuation">{</span>

<span class="token directive"><span class="token keyword">default_type</span> text/html</span><span class="token punctuation">;</span>

         <span class="token directive"><span class="token keyword">redis2_next_upstream</span> error timeout invalid_response</span><span class="token punctuation">;</span>

         <span class="token directive"><span class="token keyword">redis2_query</span> get foo</span><span class="token punctuation">;</span>

         <span class="token directive"><span class="token keyword">redis2_pass</span> redis_cluster</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stream模块" tabindex="-1"><a class="header-anchor" href="#stream模块" aria-hidden="true">#</a> Stream模块</h2>`,16),on={href:"http://nginx.org/en/docs/stream/ngx_stream_core_module.html",target:"_blank",rel:"noopener noreferrer"},cn=n("h3",{id:"限流",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#限流","aria-hidden":"true"},"#"),e(" 限流")],-1),pn=n("h4",{id:"qps限制",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#qps限制","aria-hidden":"true"},"#"),e(" QPS限制")],-1),un=n("p",null,"官方文档",-1),vn={href:"http://nginx.org/en/docs/http/ngx_http_limit_req_module.html",target:"_blank",rel:"noopener noreferrer"},mn=n("p",null,"测试工具",-1),hn={href:"https://jmeter.apache.org/",target:"_blank",rel:"noopener noreferrer"},bn=i(`<p>配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>limit_req_zone $binary_remote_addr zone=test:10m rate=15r/s;
limit_req zone=req_zone_wl burst=20 nodelay;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日志" tabindex="-1"><a class="header-anchor" href="#日志" aria-hidden="true">#</a> 日志</h3><h3 id="ngx-http-log-module" tabindex="-1"><a class="header-anchor" href="#ngx-http-log-module" aria-hidden="true">#</a> ngx_http_log_module</h3>`,4),gn={href:"http://nginx.org/en/docs/http/ngx_http_log_module.html",target:"_blank",rel:"noopener noreferrer"},kn=n("h4",{id:"ngx-http-empty-gif-module",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ngx-http-empty-gif-module","aria-hidden":"true"},"#"),e(" ngx_http_empty_gif_module")],-1),xn={href:"http://nginx.org/en/docs/http/ngx_http_empty_gif_module.html",target:"_blank",rel:"noopener noreferrer"},_n=i(`<h4 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> json</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>log_format  ngxlog json &#39;<span class="token punctuation">{</span><span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span><span class="token string">&quot;$time_iso8601&quot;</span><span class="token punctuation">,</span>&#39;
                    &#39;<span class="token property">&quot;source&quot;</span><span class="token operator">:</span><span class="token string">&quot;$server_addr&quot;</span><span class="token punctuation">,</span>&#39;
                    &#39;<span class="token property">&quot;hostname&quot;</span><span class="token operator">:</span><span class="token string">&quot;$hostname&quot;</span><span class="token punctuation">,</span>&#39;
                    &#39;<span class="token property">&quot;remote_user&quot;</span><span class="token operator">:</span><span class="token string">&quot;$remote_user&quot;</span><span class="token punctuation">,</span>&#39;
                    &#39;<span class="token property">&quot;ip&quot;</span><span class="token operator">:</span><span class="token string">&quot;$http_x_forwarded_for&quot;</span><span class="token punctuation">,</span>&#39;
                    &#39;<span class="token property">&quot;client&quot;</span><span class="token operator">:</span><span class="token string">&quot;$remote_addr&quot;</span><span class="token punctuation">,</span>&#39;
                    &#39;<span class="token property">&quot;request_method&quot;</span><span class="token operator">:</span><span class="token string">&quot;$request_method&quot;</span><span class="token punctuation">,</span>&#39;
                    &#39;<span class="token property">&quot;scheme&quot;</span><span class="token operator">:</span><span class="token string">&quot;$scheme&quot;</span><span class="token punctuation">,</span>&#39;
                    &#39;<span class="token property">&quot;domain&quot;</span><span class="token operator">:</span><span class="token string">&quot;$server_name&quot;</span><span class="token punctuation">,</span>&#39;
                    &#39;<span class="token property">&quot;referer&quot;</span><span class="token operator">:</span><span class="token string">&quot;$http_referer&quot;</span><span class="token punctuation">,</span>&#39;
                    &#39;<span class="token property">&quot;request&quot;</span><span class="token operator">:</span><span class="token string">&quot;$request_uri&quot;</span><span class="token punctuation">,</span>&#39;
                    &#39;<span class="token property">&quot;requesturl&quot;</span><span class="token operator">:</span><span class="token string">&quot;$request&quot;</span><span class="token punctuation">,</span>&#39;
                    &#39;<span class="token property">&quot;args&quot;</span><span class="token operator">:</span><span class="token string">&quot;$args&quot;</span><span class="token punctuation">,</span>&#39;
                    &#39;<span class="token property">&quot;size&quot;</span><span class="token operator">:</span>$body_bytes_sent<span class="token punctuation">,</span>&#39;
                    &#39;<span class="token property">&quot;status&quot;</span><span class="token operator">:</span> $status<span class="token punctuation">,</span>&#39;
                    &#39;<span class="token property">&quot;responsetime&quot;</span><span class="token operator">:</span>$request_time<span class="token punctuation">,</span>&#39;
                    &#39;<span class="token property">&quot;upstreamtime&quot;</span><span class="token operator">:</span><span class="token string">&quot;$upstream_response_time&quot;</span><span class="token punctuation">,</span>&#39;
                    &#39;<span class="token property">&quot;upstreamaddr&quot;</span><span class="token operator">:</span><span class="token string">&quot;$upstream_addr&quot;</span><span class="token punctuation">,</span>&#39;
                    &#39;<span class="token property">&quot;http_user_agent&quot;</span><span class="token operator">:</span><span class="token string">&quot;$http_user_agent&quot;</span><span class="token punctuation">,</span>&#39;
                    &#39;<span class="token property">&quot;http_cookie&quot;</span><span class="token operator">:</span><span class="token string">&quot;$http_cookie&quot;</span><span class="token punctuation">,</span>&#39;
                    &#39;<span class="token property">&quot;https&quot;</span><span class="token operator">:</span><span class="token string">&quot;$https&quot;</span>&#39;
                    &#39;<span class="token punctuation">}</span>&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="errorlog" tabindex="-1"><a class="header-anchor" href="#errorlog" aria-hidden="true">#</a> errorlog</h4>`,3),yn={href:"http://nginx.org/en/docs/ngx_core_module.html#error_log",target:"_blank",rel:"noopener noreferrer"},fn=n("h4",{id:"日志分割",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#日志分割","aria-hidden":"true"},"#"),e(" 日志分割")],-1),qn=n("p",null,"1.脚本",-1),wn=n("p",null,"2.Logrotate",-1),Tn=n("h3",{id:"重试机制-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#重试机制-1","aria-hidden":"true"},"#"),e(" 重试机制")],-1),zn={href:"http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream",target:"_blank",rel:"noopener noreferrer"},Sn=i('<p><strong>max_fails</strong></p><p>最大失败次数</p><p>0为标记一直可用，不检查健康状态</p><p><strong>fail_timeout</strong></p><p>失败时间</p><p>当fail_timeout时间内失败了max_fails次，标记服务不可用</p><p>fail_timeout时间后会再次激活次服务</p><p><strong>proxy_next_upstream</strong></p><p><strong>proxy_next_upstream_timeout</strong></p><p>重试最大超时时间</p><p><strong>proxy_next_upstream_tries</strong></p><p>重试次数，包括第一次</p><p>proxy_next_upstream_timeout时间内允许proxy_next_upstream_tries次重试</p><h3 id="主动健康检查" tabindex="-1"><a class="header-anchor" href="#主动健康检查" aria-hidden="true">#</a> 主动健康检查</h3><p>tengine版</p>',15),Cn={href:"https://github.com/yaoweibin/nginx_upstream_check_module",target:"_blank",rel:"noopener noreferrer"},Nn=n("p",null,"nginx商业版",-1),$n={href:"http://nginx.org/en/docs/http/ngx_http_upstream_hc_module.html",target:"_blank",rel:"noopener noreferrer"},Pn=i(`<h3 id="配置-2" tabindex="-1"><a class="header-anchor" href="#配置-2" aria-hidden="true">#</a> 配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>      upstream backend {
    
#   server 192.168.44.102 weight=8 down;
   server 192.168.44.104:8080;
   server 192.168.44.105:8080;
 check interval=3000 rise=2 fall=5 timeout=1000 type=http;
       check_http_send &quot;HEAD / HTTP/1.0\\r\\n\\r\\n&quot;;
       check_http_expect_alive http_2xx http_3xx;
   }

   
   
   
   
   
   
   location /status {
                check_status;
                access_log off;
        }


        location / {

proxy_pass http://backend;

	 root   html;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="openresty" tabindex="-1"><a class="header-anchor" href="#openresty" aria-hidden="true">#</a> Openresty</h2><h3 id="lua" tabindex="-1"><a class="header-anchor" href="#lua" aria-hidden="true">#</a> Lua</h3><p>Lua 是由巴西里约热内卢天主教大学（Pontifical Catholic University of Rio de Janeiro）里的一个研究小组于1993年开发的一种轻量、小巧的脚本语言，用标准 C 语言编写，其设计目的是为了嵌入应用程序中，从而为应用程序提供灵活的扩展和定制功能。</p>`,5),Ln={href:"http://www.lua.org/",target:"_blank",rel:"noopener noreferrer"},En=n("h3",{id:"ide",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ide","aria-hidden":"true"},"#"),e(" IDE")],-1),Hn=n("h4",{id:"emmylua插件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#emmylua插件","aria-hidden":"true"},"#"),e(" EmmyLua插件")],-1),An={href:"https://github.com/EmmyLua/IntelliJ-EmmyLua",target:"_blank",rel:"noopener noreferrer"},Dn={href:"https://emmylua.github.io/zh_CN/",target:"_blank",rel:"noopener noreferrer"},Rn=n("h4",{id:"ldt-基于eclipse",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ldt-基于eclipse","aria-hidden":"true"},"#"),e(" LDT 基于eclipse")],-1),Mn={href:"https://www.eclipse.org/ldt/",target:"_blank",rel:"noopener noreferrer"},In=i(`<h3 id="lua基础语法" tabindex="-1"><a class="header-anchor" href="#lua基础语法" aria-hidden="true">#</a> Lua基础语法</h3><h4 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> hello world</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;hello world!&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="保留关键字" tabindex="-1"><a class="header-anchor" href="#保留关键字" aria-hidden="true">#</a> 保留关键字</h4><p><code>and</code> <code>break</code> <code>do </code> <code>else</code> <code>elseif</code> <code>end</code> <code>false</code> <code> for</code> <code>function if</code> <code>in</code> <code>local</code> <code>nil</code> <code>not</code> <code>or</code> <code>repeat</code> <code>return</code> <code>then</code> <code> true</code> <code>until</code> <code> while</code></p><h4 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 两个减号是行注释</span>

<span class="token comment">--[[

 这是块注释

 这是块注释.

 --]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h4><h5 id="数字类型" tabindex="-1"><a class="header-anchor" href="#数字类型" aria-hidden="true">#</a> 数字类型</h5><p>Lua的数字只有double型，64bits</p><p>你可以以如下的方式表示数字</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>num <span class="token operator">=</span> <span class="token number">1024</span>

num <span class="token operator">=</span> <span class="token number">3.0</span>

num <span class="token operator">=</span> <span class="token number">3.1416</span>

num <span class="token operator">=</span> <span class="token number">314.16e-2</span>

num <span class="token operator">=</span> <span class="token number">0.31416E1</span>

num <span class="token operator">=</span> <span class="token number">0xff</span>

num <span class="token operator">=</span> <span class="token number">0x56</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h5><p>可以用单引号，也可以用双引号</p><p>也可以使用转义字符‘\\n’ （换行）， ‘\\r’ （回车）， ‘\\t’ （横向制表）， ‘\\v’ （纵向制表）， ‘\\’ （反斜杠）， ‘\\”‘ （双引号）， 以及 ‘\\” （单引号)等等</p><p>下面的四种方式定义了完全相同的字符串（其中的两个中括号可以用于定义有换行的字符串）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a = &#39;alo\\n123&quot;&#39;

a = &quot;alo\\n123\\&quot;&quot;

a = &#39;\\97lo\\10\\04923&quot;&#39;

a = [[alo

123&quot;]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="空值" tabindex="-1"><a class="header-anchor" href="#空值" aria-hidden="true">#</a> 空值</h5><p>C语言中的NULL在Lua中是nil，比如你访问一个没有声明过的变量，就是nil</p><h5 id="布尔类型" tabindex="-1"><a class="header-anchor" href="#布尔类型" aria-hidden="true">#</a> 布尔类型</h5><p>只有nil和false是 false</p><p>数字0，‘’空字符串（’\\0’）都是true</p><h5 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h5><p>lua中的变量如果没有特殊说明，全是全局变量，那怕是语句块或是函数里。</p><p>变量前加local关键字的是局部变量。</p><h4 id="控制语句" tabindex="-1"><a class="header-anchor" href="#控制语句" aria-hidden="true">#</a> 控制语句</h4><h5 id="while循环" tabindex="-1"><a class="header-anchor" href="#while循环" aria-hidden="true">#</a> while循环</h5><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> i <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">local</span> max <span class="token operator">=</span> <span class="token number">10</span>

<span class="token keyword">while</span> i <span class="token operator">&lt;=</span> max <span class="token keyword">do</span>

<span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>

i <span class="token operator">=</span> i <span class="token operator">+</span><span class="token number">1</span>

<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="if-else" tabindex="-1"><a class="header-anchor" href="#if-else" aria-hidden="true">#</a> if-else</h5><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">local</span> age <span class="token operator">=</span> <span class="token number">140</span>

<span class="token keyword">local</span> sex <span class="token operator">=</span> <span class="token string">&#39;Male&#39;</span>
 

  <span class="token keyword">if</span> age <span class="token operator">==</span> <span class="token number">40</span> <span class="token keyword">and</span> sex <span class="token operator">==</span><span class="token string">&quot;Male&quot;</span> <span class="token keyword">then</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot; 男人四十一枝花 &quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">elseif</span> age <span class="token operator">&gt;</span> <span class="token number">60</span> <span class="token keyword">and</span> sex <span class="token operator">~=</span><span class="token string">&quot;Female&quot;</span> <span class="token keyword">then</span>
   
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;old man!!&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">elseif</span> age <span class="token operator">&lt;</span> <span class="token number">20</span> <span class="token keyword">then</span>
    io<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;too young, too simple!\\n&quot;</span><span class="token punctuation">)</span>
  
  <span class="token keyword">else</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;Your age is &quot;</span><span class="token operator">..</span>age<span class="token punctuation">)</span>
  <span class="token keyword">end</span>

<span class="token keyword">end</span>


<span class="token comment">-- 调用</span>
<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="for循环" tabindex="-1"><a class="header-anchor" href="#for循环" aria-hidden="true">#</a> for循环</h5><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>sum <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">for</span> i <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span> <span class="token keyword">do</span>

	sum <span class="token operator">=</span> sum <span class="token operator">+</span> i

<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h5><ol><li></li></ol><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">function</span> <span class="token function">myPower</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span>

  <span class="token keyword">return</span>      y<span class="token operator">+</span>x

<span class="token keyword">end</span>

power2 <span class="token operator">=</span> <span class="token function">myPower</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>

 <span class="token function">print</span><span class="token punctuation">(</span>power2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li></li></ol><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">function</span> <span class="token function">newCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

   <span class="token keyword">local</span> i <span class="token operator">=</span> <span class="token number">0</span>
   <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">-- anonymous function</span>

        i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>

        <span class="token keyword">return</span> i

    <span class="token keyword">end</span>
<span class="token keyword">end</span>

 

c1 <span class="token operator">=</span> <span class="token function">newCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">print</span><span class="token punctuation">(</span><span class="token function">c1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">--&gt; 1</span>

<span class="token function">print</span><span class="token punctuation">(</span><span class="token function">c1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">--&gt; 2</span>

<span class="token function">print</span><span class="token punctuation">(</span><span class="token function">c1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span>bGay <span class="token operator">=</span> <span class="token string">&quot;yiming&quot;</span><span class="token punctuation">,</span> <span class="token number">37</span><span class="token punctuation">,</span> <span class="token keyword">false</span><span class="token punctuation">,</span> <span class="token string">&quot;yimingl@hotmail.com&quot;</span>

<span class="token function">print</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>bGay<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">function</span> <span class="token function">isMyGirl</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
 <span class="token keyword">return</span> name <span class="token operator">==</span> <span class="token string">&#39;xiao6&#39;</span> <span class="token punctuation">,</span> name
<span class="token keyword">end</span>

<span class="token keyword">local</span> bol<span class="token punctuation">,</span>name <span class="token operator">=</span> <span class="token function">isMyGirl</span><span class="token punctuation">(</span><span class="token string">&#39;xiao6&#39;</span><span class="token punctuation">)</span>

<span class="token function">print</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>bol<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="table" tabindex="-1"><a class="header-anchor" href="#table" aria-hidden="true">#</a> Table</h4><p>key，value的键值对 类似 map</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
dog <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">=</span><span class="token string">&#39;111&#39;</span><span class="token punctuation">,</span>age<span class="token operator">=</span><span class="token number">18</span><span class="token punctuation">,</span>height<span class="token operator">=</span><span class="token number">165.5</span><span class="token punctuation">}</span>

dog<span class="token punctuation">.</span>age<span class="token operator">=</span><span class="token number">35</span>

<span class="token function">print</span><span class="token punctuation">(</span>dog<span class="token punctuation">.</span>name<span class="token punctuation">,</span>dog<span class="token punctuation">.</span>age<span class="token punctuation">,</span>dog<span class="token punctuation">.</span>height<span class="token punctuation">)</span>

<span class="token function">print</span><span class="token punctuation">(</span>dog<span class="token punctuation">)</span>
<span class="token keyword">end</span>
<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">&quot;dog&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;wangwang!&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span> <span class="token keyword">end</span><span class="token punctuation">}</span>

<span class="token function">print</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>
<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">&quot;dog&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;wangwang!&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span> <span class="token keyword">end</span><span class="token punctuation">}</span>

<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token keyword">in</span> <span class="token function">pairs</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token keyword">do</span>

   <span class="token function">print</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="成员函数" tabindex="-1"><a class="header-anchor" href="#成员函数" aria-hidden="true">#</a> 成员函数</h4><h4 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

person <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">=</span><span class="token string">&#39;旺财&#39;</span><span class="token punctuation">,</span>age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">}</span>

  <span class="token keyword">function</span>  person<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span>food<span class="token punctuation">)</span>

    <span class="token function">print</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name <span class="token operator">..</span><span class="token string">&quot; eating &quot;</span><span class="token operator">..</span>food<span class="token punctuation">)</span>

  <span class="token keyword">end</span>
person<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">&quot;骨头&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>
<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="openresty-nginx-lua" tabindex="-1"><a class="header-anchor" href="#openresty-nginx-lua" aria-hidden="true">#</a> Openresty Nginx + Lua</h2><p>Nginx是一个主进程配合多个工作进程的工作模式，每个进程由单个线程来处理多个连接。</p><p>在生产环境中，我们往往会把cpu内核直接绑定到工作进程上，从而提升性能。</p><h3 id="安装-3" tabindex="-1"><a class="header-anchor" href="#安装-3" aria-hidden="true">#</a> 安装</h3><h4 id="预编译安装" tabindex="-1"><a class="header-anchor" href="#预编译安装" aria-hidden="true">#</a> 预编译安装</h4>`,55),jn={href:"http://openresty.org/cn/linux-packages.html",target:"_blank",rel:"noopener noreferrer"},On=n("p",null,"你可以在你的 CentOS 系统中添加 openresty 仓库，这样就可以便于未来安装或更新我们的软件包（通过 yum update 命令）。运行下面的命令就可以添加我们的仓库：",-1),Gn=n("p",null," yum install yum-utils",-1),Wn={href:"https://openresty.org/package/centos/openresty.repo",target:"_blank",rel:"noopener noreferrer"},Kn=n("p",null,"然后就可以像下面这样安装软件包，比如 openresty：",-1),Un=n("p",null," yum install openresty",-1),Bn=n("p",null,"如果你想安装命令行工具 resty，那么可以像下面这样安装 openresty-resty 包：",-1),Fn=n("p",null," sudo yum install openresty-resty",-1),Vn=n("h4",{id:"源码编译安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#源码编译安装","aria-hidden":"true"},"#"),e(" 源码编译安装")],-1),Xn=n("h4",{id:"下载",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#下载","aria-hidden":"true"},"#"),e(" 下载")],-1),Jn={href:"http://openresty.org/cn/download.html",target:"_blank",rel:"noopener noreferrer"},Yn=i(`<p>最小版本基于nginx1.21</p><p><code>./configure</code></p><p>然后在进入 <code>openresty-VERSION/ </code>目录, 然后输入以下命令配置:</p><p><code>./configure</code></p><p>默认, <code>--prefix=/usr/local/openresty</code> 程序会被安装到<code>/usr/local/openresty</code>目录。</p><p>依赖 <code>gcc openssl-devel pcre-devel zlib-devel</code></p><p>安装：<code>yum install gcc openssl-devel pcre-devel zlib-devel postgresql-devel</code></p><p>您可以指定各种选项，比如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./configure --prefix=/opt/openresty \\

           --with-luajit \\

           --without-http_redis2_module \\

           --with-http_iconv_module \\

           --with-http_postgres_module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>试着使用 <code>./configure --help</code> 查看更多的选项。</p><p><code>make &amp;&amp; make install</code></p><h4 id="服务命令" tabindex="-1"><a class="header-anchor" href="#服务命令" aria-hidden="true">#</a> 服务命令</h4><h5 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h5><p><code>Service openresty start</code></p><h5 id="停止" tabindex="-1"><a class="header-anchor" href="#停止" aria-hidden="true">#</a> 停止</h5><p><code>Service openresty stop</code></p><h5 id="检查配置文件是否正确" tabindex="-1"><a class="header-anchor" href="#检查配置文件是否正确" aria-hidden="true">#</a> 检查配置文件是否正确</h5><p><code>Nginx -t</code></p><p>重新加载配置文件</p><p><code>Service openresty reload</code></p><h5 id="查看已安装模块和版本号" tabindex="-1"><a class="header-anchor" href="#查看已安装模块和版本号" aria-hidden="true">#</a> 查看已安装模块和版本号</h5><p><code>Nginx -V</code></p><h3 id="测试lua脚本" tabindex="-1"><a class="header-anchor" href="#测试lua脚本" aria-hidden="true">#</a> 测试lua脚本</h3><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>在Nginx.conf 中写入
   <span class="token directive"><span class="token keyword">location</span> /lua</span> <span class="token punctuation">{</span>

        <span class="token directive"><span class="token keyword">default_type</span> text/html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">content_by_lua</span> <span class="token string">&#39;
           ngx.say(&quot;&lt;p&gt;Hello, World!&lt;/p&gt;&quot;)
         &#39;</span></span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lua-nginx-module" tabindex="-1"><a class="header-anchor" href="#lua-nginx-module" aria-hidden="true">#</a> lua-nginx-module</h3><h4 id="创建配置文件lua-conf" tabindex="-1"><a class="header-anchor" href="#创建配置文件lua-conf" aria-hidden="true">#</a> 创建配置文件lua.conf</h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>   <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>

   <span class="token directive"><span class="token keyword">location</span> /lua</span> <span class="token punctuation">{</span>

        <span class="token directive"><span class="token keyword">default_type</span> text/html</span><span class="token punctuation">;</span>

        <span class="token directive"><span class="token keyword">content_by_lua_file</span> conf/lua/hello.lua</span><span class="token punctuation">;</span>

         <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在nginx-conf下引入lua配置" tabindex="-1"><a class="header-anchor" href="#在nginx-conf下引入lua配置" aria-hidden="true">#</a> 在Nginx.conf下引入lua配置</h4><p><code>include lua.conf;</code></p><h4 id="创建外部lua脚本" tabindex="-1"><a class="header-anchor" href="#创建外部lua脚本" aria-hidden="true">#</a> 创建外部lua脚本</h4><p><code>conf/lua/hello.lua</code></p><p>内容：</p><p><code>ngx.say(&quot;&lt;p&gt;Hello, World!&lt;/p&gt;&quot;)</code></p><h4 id="获取nginx-uri中的单一变量" tabindex="-1"><a class="header-anchor" href="#获取nginx-uri中的单一变量" aria-hidden="true">#</a> 获取Nginx uri中的单一变量</h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>    <span class="token directive"><span class="token keyword">location</span> /nginx_var</span> <span class="token punctuation">{</span>

         <span class="token directive"><span class="token keyword">default_type</span> text/html</span><span class="token punctuation">;</span>

        <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>

            ngx.say(ngx.var.arg_a)

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取nginx-uri中的所有变量" tabindex="-1"><a class="header-anchor" href="#获取nginx-uri中的所有变量" aria-hidden="true">#</a> 获取Nginx uri中的所有变量</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> uri_args <span class="token operator">=</span> ngx<span class="token punctuation">.</span>req<span class="token punctuation">.</span><span class="token function">get_uri_args</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  

<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token keyword">in</span> <span class="token function">pairs</span><span class="token punctuation">(</span>uri_args<span class="token punctuation">)</span> <span class="token keyword">do</span>  

    <span class="token keyword">if</span> <span class="token function">type</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;table&quot;</span> <span class="token keyword">then</span>  

        ngx<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> <span class="token string">&quot; : &quot;</span><span class="token punctuation">,</span> table<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token string">&quot;, &quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;br/&gt;&quot;</span><span class="token punctuation">)</span>  

    <span class="token keyword">else</span>  

        ngx<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> <span class="token string">&quot;: &quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">,</span> <span class="token string">&quot;&lt;br/&gt;&quot;</span><span class="token punctuation">)</span>  

    <span class="token keyword">end</span>  
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在处理http请求时还可以使用" tabindex="-1"><a class="header-anchor" href="#在处理http请求时还可以使用" aria-hidden="true">#</a> 在处理http请求时还可以使用</h4><ul><li>set_by_lua</li></ul><p>修改nginx变量</p><ul><li>rewrite_by_lua</li></ul><p>修改uri</p><ul><li>access_by_lua</li></ul><p>访问控制</p><ul><li>header_filter_by_lua</li></ul><p>修改响应头</p><ul><li>boy_filter_by_lua</li></ul><p>修改响应体</p><ul><li>log_by_lua</li></ul><p>日志</p><h4 id="代码热部署" tabindex="-1"><a class="header-anchor" href="#代码热部署" aria-hidden="true">#</a> 代码热部署</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lua_code_cache off
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="获取nginx请求头信息" tabindex="-1"><a class="header-anchor" href="#获取nginx请求头信息" aria-hidden="true">#</a> 获取Nginx请求头信息</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> headers <span class="token operator">=</span> ngx<span class="token punctuation">.</span>req<span class="token punctuation">.</span><span class="token function">get_headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                         

ngx<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token string">&quot;Host : &quot;</span><span class="token punctuation">,</span> headers<span class="token punctuation">[</span><span class="token string">&quot;Host&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;br/&gt;&quot;</span><span class="token punctuation">)</span>  

ngx<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token string">&quot;user-agent : &quot;</span><span class="token punctuation">,</span> headers<span class="token punctuation">[</span><span class="token string">&quot;user-agent&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;br/&gt;&quot;</span><span class="token punctuation">)</span>  

ngx<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token string">&quot;user-agent : &quot;</span><span class="token punctuation">,</span> headers<span class="token punctuation">.</span>user_agent<span class="token punctuation">,</span> <span class="token string">&quot;&lt;br/&gt;&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> k<span class="token punctuation">,</span>v <span class="token keyword">in</span> <span class="token function">pairs</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span> <span class="token keyword">do</span>  

    <span class="token keyword">if</span> <span class="token function">type</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;table&quot;</span> <span class="token keyword">then</span>  

        ngx<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> <span class="token string">&quot; : &quot;</span><span class="token punctuation">,</span> table<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;br/&gt;&quot;</span><span class="token punctuation">)</span>  

    <span class="token keyword">else</span>  

        ngx<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> <span class="token string">&quot; : &quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">,</span> <span class="token string">&quot;&lt;br/&gt;&quot;</span><span class="token punctuation">)</span>  

    <span class="token keyword">end</span>  

<span class="token keyword">end</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取post请求参数" tabindex="-1"><a class="header-anchor" href="#获取post请求参数" aria-hidden="true">#</a> 获取post请求参数</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>ngx<span class="token punctuation">.</span>req<span class="token punctuation">.</span><span class="token function">read_body</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  

ngx<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token string">&quot;post args begin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;br/&gt;&quot;</span><span class="token punctuation">)</span>  

<span class="token keyword">local</span> post_args <span class="token operator">=</span> ngx<span class="token punctuation">.</span>req<span class="token punctuation">.</span><span class="token function">get_post_args</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  

<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token keyword">in</span> <span class="token function">pairs</span><span class="token punctuation">(</span>post_args<span class="token punctuation">)</span> <span class="token keyword">do</span>  

    <span class="token keyword">if</span> <span class="token function">type</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;table&quot;</span> <span class="token keyword">then</span>  

        ngx<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> <span class="token string">&quot; : &quot;</span><span class="token punctuation">,</span> table<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token string">&quot;, &quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;br/&gt;&quot;</span><span class="token punctuation">)</span>  

    <span class="token keyword">else</span>  

        ngx<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> <span class="token string">&quot;: &quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">,</span> <span class="token string">&quot;&lt;br/&gt;&quot;</span><span class="token punctuation">)</span>  

    <span class="token keyword">end</span>  
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="http协议版本" tabindex="-1"><a class="header-anchor" href="#http协议版本" aria-hidden="true">#</a> http协议版本</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>ngx<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token string">&quot;ngx.req.http_version : &quot;</span><span class="token punctuation">,</span> ngx<span class="token punctuation">.</span>req<span class="token punctuation">.</span><span class="token function">http_version</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;br/&gt;&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="请求方法" tabindex="-1"><a class="header-anchor" href="#请求方法" aria-hidden="true">#</a> 请求方法</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>ngx<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token string">&quot;ngx.req.get_method : &quot;</span><span class="token punctuation">,</span> ngx<span class="token punctuation">.</span>req<span class="token punctuation">.</span><span class="token function">get_method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;br/&gt;&quot;</span><span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="原始的请求头内容" tabindex="-1"><a class="header-anchor" href="#原始的请求头内容" aria-hidden="true">#</a> 原始的请求头内容</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>ngx<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token string">&quot;ngx.req.raw_header : &quot;</span><span class="token punctuation">,</span>  ngx<span class="token punctuation">.</span>req<span class="token punctuation">.</span><span class="token function">raw_header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;br/&gt;&quot;</span><span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="body内容体" tabindex="-1"><a class="header-anchor" href="#body内容体" aria-hidden="true">#</a> body内容体</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>ngx<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token string">&quot;ngx.req.get_body_data() : &quot;</span><span class="token punctuation">,</span> ngx<span class="token punctuation">.</span>req<span class="token punctuation">.</span><span class="token function">get_body_data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;br/&gt;&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="nginx缓存" tabindex="-1"><a class="header-anchor" href="#nginx缓存" aria-hidden="true">#</a> Nginx缓存</h3><h4 id="nginx全局内存缓存" tabindex="-1"><a class="header-anchor" href="#nginx全局内存缓存" aria-hidden="true">#</a> Nginx全局内存缓存</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>lua_shared_dict shared_data 1m<span class="token punctuation">;</span>

<span class="token keyword">local</span> shared_data <span class="token operator">=</span> ngx<span class="token punctuation">.</span>shared<span class="token punctuation">.</span>shared_data  

  

<span class="token keyword">local</span> i <span class="token operator">=</span> shared_data<span class="token punctuation">:</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;i&quot;</span><span class="token punctuation">)</span>  

<span class="token keyword">if</span> <span class="token keyword">not</span> i <span class="token keyword">then</span>  

    i <span class="token operator">=</span> <span class="token number">1</span>  

    shared_data<span class="token punctuation">:</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;i&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>  

    ngx<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token string">&quot;lazy set i &quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token string">&quot;&lt;br/&gt;&quot;</span><span class="token punctuation">)</span>  
<span class="token keyword">end</span>  
 

i <span class="token operator">=</span> shared_data<span class="token punctuation">:</span><span class="token function">incr</span><span class="token punctuation">(</span><span class="token string">&quot;i&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>  

ngx<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token string">&quot;i=&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token string">&quot;&lt;br/&gt;&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="lua-resty-lrucache" tabindex="-1"><a class="header-anchor" href="#lua-resty-lrucache" aria-hidden="true">#</a> lua-resty-lrucache</h4><p>Lua 实现的一个简单的 LRU 缓存，适合在 Lua 空间里直接缓存较为复杂的 Lua 数据结构：它相比 ngx_lua 共享内存字典可以省去较昂贵的序列化操作，相比 memcached 这样的外部服务又能省去较昂贵的 socket 操作</p>`,69),Qn={href:"https://github.com/openresty/lua-resty-lrucache",target:"_blank",rel:"noopener noreferrer"},Zn=i(`<p>引用lua文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
	            content_by_lua_block {
                require(&quot;my/cache&quot;).go()
            }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>local _M = {}


lrucache = require &quot;resty.lrucache&quot;

c, err = lrucache.new(200)  -- allow up to 200 items in the cache
ngx.say(&quot;count=init&quot;)


if not c then
    error(&quot;failed to create the cache: &quot; .. (err or &quot;unknown&quot;))
end

function _M.go()

count = c:get(&quot;count&quot;)


c:set(&quot;count&quot;,100)
ngx.say(&quot;count=&quot;, count, &quot; --&lt;br/&gt;&quot;)


if not count then  


    c:set(&quot;count&quot;,1)

    ngx.say(&quot;lazy set count &quot;, c:get(&quot;count&quot;), &quot;&lt;br/&gt;&quot;)  

else


c:set(&quot;count&quot;,count+1)
 


ngx.say(&quot;count=&quot;, count, &quot;&lt;br/&gt;&quot;)
end


end
return _M


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开lua_code_cache</p><h3 id="lua-resty-redis访问redis" tabindex="-1"><a class="header-anchor" href="#lua-resty-redis访问redis" aria-hidden="true">#</a> lua-resty-redis访问redis</h3>`,6),ne={href:"https://github.com/openresty/lua-resty-redis",target:"_blank",rel:"noopener noreferrer"},ee=i(`<h4 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法" aria-hidden="true">#</a> 常用方法</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> res<span class="token punctuation">,</span> err <span class="token operator">=</span> red<span class="token punctuation">:</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">local</span> res<span class="token punctuation">,</span> err <span class="token operator">=</span> red<span class="token punctuation">:</span><span class="token function">lrange</span><span class="token punctuation">(</span><span class="token string">&quot;nokey&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

ngx<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token string">&quot;res:&quot;</span><span class="token punctuation">,</span>cjson<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建连接" tabindex="-1"><a class="header-anchor" href="#创建连接" aria-hidden="true">#</a> 创建连接</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>red<span class="token punctuation">,</span> err <span class="token operator">=</span> redis<span class="token punctuation">:</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

ok<span class="token punctuation">,</span> err <span class="token operator">=</span> red<span class="token punctuation">:</span><span class="token function">connect</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span> port<span class="token punctuation">,</span> options_table?<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="timeout" tabindex="-1"><a class="header-anchor" href="#timeout" aria-hidden="true">#</a> timeout</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>red<span class="token punctuation">:</span><span class="token function">set_timeout</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="keepalive-1" tabindex="-1"><a class="header-anchor" href="#keepalive-1" aria-hidden="true">#</a> keepalive</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>red<span class="token punctuation">:</span><span class="token function">set_keepalive</span><span class="token punctuation">(</span>max_idle_timeout<span class="token punctuation">,</span> pool_size<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="close" tabindex="-1"><a class="header-anchor" href="#close" aria-hidden="true">#</a> close</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ok, err = red:close()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="pipeline-1" tabindex="-1"><a class="header-anchor" href="#pipeline-1" aria-hidden="true">#</a> pipeline</h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>red:init_pipeline()

results, err = red:commit_pipeline()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="认证" tabindex="-1"><a class="header-anchor" href="#认证" aria-hidden="true">#</a> 认证</h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>    local res, err = red:auth(&quot;foobared&quot;)

    if not res then

        ngx.say(&quot;failed to authenticate: &quot;, err)

        return
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  local redis = require &quot;resty.redis&quot;
                local red = redis:new()

                red:set_timeouts(1000, 1000, 1000) -- 1 sec

  local ok, err = red:connect(&quot;127.0.0.1&quot;, 6379)
 if not ok then
                    ngx.say(&quot;failed to connect: &quot;, err)
                    return
                end

                ok, err = red:set(&quot;dog&quot;, &quot;an animal&quot;)
                if not ok then
                    ngx.say(&quot;failed to set dog: &quot;, err)
                    return
                end

                ngx.say(&quot;set result: &quot;, ok)

                local res, err = red:get(&quot;dog&quot;)
                if not res then
                    ngx.say(&quot;failed to get dog: &quot;, err)
                    return
                end

                if res == ngx.null then
                    ngx.say(&quot;dog not found.&quot;)
                    return
                end


              ngx.say(&quot;dog: &quot;, res)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="redis-cluster支持" tabindex="-1"><a class="header-anchor" href="#redis-cluster支持" aria-hidden="true">#</a> redis-cluster支持</h4>`,16),se={href:"https://github.com/steve0511/resty-redis-cluster",target:"_blank",rel:"noopener noreferrer"},ae=i(`<h3 id="redis2-nginx-module-1" tabindex="-1"><a class="header-anchor" href="#redis2-nginx-module-1" aria-hidden="true">#</a> redis2-nginx-module</h3><p>redis2-nginx-module是一个支持 Redis 2.0 协议的 Nginx upstream 模块，它可以让 Nginx 以非阻塞方式直接防问远方的 Redis 服务，同时支持 TCP 协议和 Unix Domain Socket 模式，并且可以启用强大的 Redis 连接池功能。</p><h4 id="test-1" tabindex="-1"><a class="header-anchor" href="#test-1" aria-hidden="true">#</a> test</h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> = /foo</span> <span class="token punctuation">{</span>

<span class="token directive"><span class="token keyword">default_type</span> text/html</span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">redis2_query</span> auth <span class="token number">123123</span></span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">set</span> <span class="token variable">$value</span> <span class="token string">&#39;first&#39;</span></span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">redis2_query</span> set one <span class="token variable">$value</span></span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">redis2_pass</span> 192.168.199.161:6379</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-1" tabindex="-1"><a class="header-anchor" href="#get-1" aria-hidden="true">#</a> get</h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> = /get</span> <span class="token punctuation">{</span>

<span class="token directive"><span class="token keyword">default_type</span> text/html</span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">redis2_pass</span> 192.168.199.161:6379</span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">redis2_query</span> auth <span class="token number">123123</span></span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">set_unescape_uri</span> <span class="token variable">$key</span> <span class="token variable">$arg_key</span></span><span class="token punctuation">;</span>  <span class="token comment"># this requires ngx_set_misc</span>

     <span class="token directive"><span class="token keyword">redis2_query</span> get <span class="token variable">$key</span></span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="set-2" tabindex="-1"><a class="header-anchor" href="#set-2" aria-hidden="true">#</a> set</h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># GET /set?key=one&amp;val=first%20value</span>

<span class="token directive"><span class="token keyword">location</span> = /set</span> <span class="token punctuation">{</span>

<span class="token directive"><span class="token keyword">default_type</span> text/html</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">redis2_pass</span> 192.168.199.161:6379</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">redis2_query</span> auth <span class="token number">123123</span></span><span class="token punctuation">;</span>
 

     <span class="token directive"><span class="token keyword">set_unescape_uri</span> <span class="token variable">$key</span> <span class="token variable">$arg_key</span></span><span class="token punctuation">;</span>  <span class="token comment"># this requires ngx_set_misc</span>

     <span class="token directive"><span class="token keyword">set_unescape_uri</span> <span class="token variable">$val</span> <span class="token variable">$arg_val</span></span><span class="token punctuation">;</span>  <span class="token comment"># this requires ngx_set_misc</span>

     <span class="token directive"><span class="token keyword">redis2_query</span> set <span class="token variable">$key</span> <span class="token variable">$val</span></span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pipeline-2" tabindex="-1"><a class="header-anchor" href="#pipeline-2" aria-hidden="true">#</a> pipeline</h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>     <span class="token directive"><span class="token keyword">set</span> <span class="token variable">$value</span> <span class="token string">&#39;first&#39;</span></span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">redis2_query</span> set one <span class="token variable">$value</span></span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">redis2_query</span> get one</span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">redis2_query</span> set one two</span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">redis2_query</span> get one</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">redis2_query</span> del key1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="list-1" tabindex="-1"><a class="header-anchor" href="#list-1" aria-hidden="true">#</a> list</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>    redis2_query lpush key1 C<span class="token punctuation">;</span>

    redis2_query lpush key1 B<span class="token punctuation">;</span>

    redis2_query lpush key1 A<span class="token punctuation">;</span>

redis2_query lrange key1 <span class="token number">0</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="集群-1" tabindex="-1"><a class="header-anchor" href="#集群-1" aria-hidden="true">#</a> 集群</h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> redis_cluster</span> <span class="token punctuation">{</span>

     <span class="token directive"><span class="token keyword">server</span> 192.168.199.161:6379</span><span class="token punctuation">;</span>

     <span class="token directive"><span class="token keyword">server</span> 192.168.199.161:6379</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">location</span> = /redis</span> <span class="token punctuation">{</span>

<span class="token directive"><span class="token keyword">default_type</span> text/html</span><span class="token punctuation">;</span>

         <span class="token directive"><span class="token keyword">redis2_next_upstream</span> error timeout invalid_response</span><span class="token punctuation">;</span>

         <span class="token directive"><span class="token keyword">redis2_query</span> get foo</span><span class="token punctuation">;</span>

         <span class="token directive"><span class="token keyword">redis2_pass</span> redis_cluster</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lua-resty-mysql" tabindex="-1"><a class="header-anchor" href="#lua-resty-mysql" aria-hidden="true">#</a> lua-resty-mysql</h3>`,15),ie={href:"https://github.com/openresty/lua-resty-mysql",target:"_blank",rel:"noopener noreferrer"},te=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>local mysql = require &quot;resty.mysql&quot;
                local db, err = mysql:new()
                if not db then
                    ngx.say(&quot;failed to instantiate mysql: &quot;, err)
                    return
                end

                db:set_timeout(1000) -- 1 sec


                local ok, err, errcode, sqlstate = db:connect{
                    host = &quot;192.168.44.211&quot;,
                    port = 3306,
                    database = &quot;zhangmen&quot;,
                    user = &quot;root&quot;,
                    password = &quot;111111&quot;,
                    charset = &quot;utf8&quot;,
                    max_packet_size = 1024 * 1024,
                }


                ngx.say(&quot;connected to mysql.&lt;br&gt;&quot;)



                local res, err, errcode, sqlstate = db:query(&quot;drop table if exists cats&quot;)
                if not res then
                    ngx.say(&quot;bad result: &quot;, err, &quot;: &quot;, errcode, &quot;: &quot;, sqlstate, &quot;.&quot;)
                    return
                end


                res, err, errcode, sqlstate =
                    db:query(&quot;create table cats &quot;
                             .. &quot;(id serial primary key, &quot;
                             .. &quot;name varchar(5))&quot;)
                if not res then
                    ngx.say(&quot;bad result: &quot;, err, &quot;: &quot;, errcode, &quot;: &quot;, sqlstate, &quot;.&quot;)
                    return
                end

                ngx.say(&quot;table cats created.&quot;)



                res, err, errcode, sqlstate =
                    db:query(&quot;select * from t_emp&quot;)
                if not res then
                    ngx.say(&quot;bad result: &quot;, err, &quot;: &quot;, errcode, &quot;: &quot;, sqlstate, &quot;.&quot;)
                    return
                end

                local cjson = require &quot;cjson&quot;
                ngx.say(&quot;result: &quot;, cjson.encode(res))


                local ok, err = db:set_keepalive(10000, 100)
                if not ok then
                    ngx.say(&quot;failed to set keepalive: &quot;, err)
                    return
                end
 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模板实时渲染-lua-resty-template" tabindex="-1"><a class="header-anchor" href="#模板实时渲染-lua-resty-template" aria-hidden="true">#</a> 模板实时渲染 lua-resty-template</h2>`,2),le={href:"https://github.com/bungle/lua-resty-template",target:"_blank",rel:"noopener noreferrer"},de=i("<p>如果学习过JavaEE中的servlet和JSP的话，应该知道JSP模板最终会被翻译成Servlet来执行；</p><p>而lua-resty-template模板引擎可以认为是JSP，其最终会被翻译成Lua代码，然后通过ngx.print输出。</p><p>lua-resty-template大体内容有：</p><p>l 模板位置：从哪里查找模板；</p><p>l 变量输出/转义：变量值输出；</p><p>l 代码片段：执行代码片段，完成如if/else、for等复杂逻辑，调用对象函数/方法；</p><p>l 注释：解释代码片段含义；</p><p>l include：包含另一个模板片段；</p><p>l 其他：lua-resty-template还提供了不需要解析片段、简单布局、可复用的代码块、宏指令等支持。</p><p>基础语法</p><p>l {(include_file)}：包含另一个模板文件；</p><p>l {* var *}：变量输出；</p>",12),re=i(`<p>l {% code %}：代码片段；</p><p>l {# comment #}：注释；</p><p>l {-raw-}：中间的内容不会解析，作为纯文本输出；</p><h3 id="lua代码热加载" tabindex="-1"><a class="header-anchor" href="#lua代码热加载" aria-hidden="true">#</a> lua代码热加载</h3><p>在http模块中加入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lua_code_cache off;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>reload后Nginx会提示影响性能，记得在生产环境中关掉。</p><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><h3 id="一、初始化" tabindex="-1"><a class="header-anchor" href="#一、初始化" aria-hidden="true">#</a> 一、初始化</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-- Using template.new
local template = require &quot;resty.template&quot;
local view = template.new &quot;view.html&quot;
view.message = &quot;Hello, World!&quot;
view:render()

-- Using template.render
-- template.render(&quot;view.html&quot;, { message = &quot;Hel11lo, Worl1d!&quot; })


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、执行函数-得到渲染之后的内容" tabindex="-1"><a class="header-anchor" href="#二、执行函数-得到渲染之后的内容" aria-hidden="true">#</a> 二、执行函数，得到渲染之后的内容</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>local func = template.compile(&quot;view.html&quot;)  

local content = func(context)  

ngx.say(&quot;xx:&quot;,content) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="模板文件存放位置" tabindex="-1"><a class="header-anchor" href="#模板文件存放位置" aria-hidden="true">#</a> 模板文件存放位置</h4><h5 id="nginx-conf中配置" tabindex="-1"><a class="header-anchor" href="#nginx-conf中配置" aria-hidden="true">#</a> nginx.conf中配置</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set $template_root /usr/local/openresty/nginx/tmp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="resty-template-html" tabindex="-1"><a class="header-anchor" href="#resty-template-html" aria-hidden="true">#</a> resty.template.html</h3><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> template <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;resty.template&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> html <span class="token operator">=</span> require <span class="token string">&quot;resty.template.html&quot;</span>

template<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">[[
&lt;ul&gt;
{% for _, person in ipairs(context) do %}
    {*html.li(person.name)*} --
{% end %}
&lt;/ul&gt;
&lt;table&gt;
{% for _, person in ipairs(context) do %}
    &lt;tr data-sort=&quot;{{(person.name or &quot;&quot;):lower()}}&quot;&gt;
        {*html.td{ id = person.id }(person.name)*}
    &lt;/tr&gt;
{% end %}
&lt;/table&gt;]]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> name <span class="token operator">=</span> <span class="token string">&quot;Emma&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> name <span class="token operator">=</span> <span class="token string">&quot;James&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> name <span class="token operator">=</span> <span class="token string">&quot;Nicholas&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">4</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模板内容" tabindex="-1"><a class="header-anchor" href="#模板内容" aria-hidden="true">#</a> 模板内容</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{message}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多值传入" tabindex="-1"><a class="header-anchor" href="#多值传入" aria-hidden="true">#</a> 多值传入</h3><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>template<span class="token punctuation">.</span><span class="token function">caching</span><span class="token punctuation">(</span><span class="token keyword">false</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> template <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;resty.template&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> context <span class="token operator">=</span> <span class="token punctuation">{</span>
    name <span class="token operator">=</span> <span class="token string">&quot;lucy&quot;</span><span class="token punctuation">,</span>
    age <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
template<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&quot;view.html&quot;</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模板内容-1" tabindex="-1"><a class="header-anchor" href="#模板内容-1" aria-hidden="true">#</a> 模板内容</h3><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token operator">&lt;</span>!DOCTYPE html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>name<span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>age<span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span>age<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模板管理与缓存" tabindex="-1"><a class="header-anchor" href="#模板管理与缓存" aria-hidden="true">#</a> 模板管理与缓存</h3><p>模板缓存：默认开启，开发环境可以手动关闭</p><p><code>template.caching(true)</code></p><p>模板文件需要业务系统更新与维护，当模板文件更新后，可以通过模板版本号或消息通知Openresty清空缓存重载模板到内存中</p><p><code>template.cache = {}</code></p><h3 id="完整页面" tabindex="-1"><a class="header-anchor" href="#完整页面" aria-hidden="true">#</a> 完整页面</h3><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> template <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;resty.template&quot;</span><span class="token punctuation">)</span>
template<span class="token punctuation">.</span><span class="token function">caching</span><span class="token punctuation">(</span><span class="token keyword">false</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> context <span class="token operator">=</span> <span class="token punctuation">{</span>
    title <span class="token operator">=</span> <span class="token string">&quot;测试&quot;</span><span class="token punctuation">,</span>
    name <span class="token operator">=</span> <span class="token string">&quot;lucy&quot;</span><span class="token punctuation">,</span>
    description <span class="token operator">=</span> <span class="token string">&quot;&lt;script&gt;alert(1);&lt;/script&gt;&quot;</span><span class="token punctuation">,</span>
    age <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">,</span>
    hobby <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;电影&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;音乐&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;阅读&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    score <span class="token operator">=</span> <span class="token punctuation">{</span>语文 <span class="token operator">=</span> <span class="token number">90</span><span class="token punctuation">,</span> 数学 <span class="token operator">=</span> <span class="token number">80</span><span class="token punctuation">,</span> 英语 <span class="token operator">=</span> <span class="token number">70</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    score2 <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token punctuation">{</span>name <span class="token operator">=</span> <span class="token string">&quot;语文&quot;</span><span class="token punctuation">,</span> score <span class="token operator">=</span> <span class="token number">90</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>name <span class="token operator">=</span> <span class="token string">&quot;数学&quot;</span><span class="token punctuation">,</span> score <span class="token operator">=</span> <span class="token number">80</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>name <span class="token operator">=</span> <span class="token string">&quot;英语&quot;</span><span class="token punctuation">,</span> score <span class="token operator">=</span> <span class="token number">70</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

template<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&quot;view.html&quot;</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模板" tabindex="-1"><a class="header-anchor" href="#模板" aria-hidden="true">#</a> 模板</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>{(header.html)}  
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>  
      {# 不转义变量输出 #}  
      姓名：{* string.upper(name) *}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>  
      {# 转义变量输出 #}  
      简介：{{description}}
           简介：{* description *}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>  
      {# 可以做一些运算 #}  
      年龄: {* age + 10 *}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>  
      {# 循环输出 #}  
      爱好：  
      {% for i, v in ipairs(hobby) do %}  
         {% if v == &#39;电影&#39; then  %} - xxoo
            
              {%else%}  - {* v *} 
{% end %}  
         
      {% end %}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>  
  
      成绩：  
      {% local i = 1; %}  
      {% for k, v in pairs(score) do %}  
         {% if i &gt; 1 then %}，{% end %}  
         {* k *} = {* v *}  
         {% i = i + 1 %}  
      {% end %}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>  
      成绩2：  
      {% for i = 1, #score2 do local t = score2[i] %}  
         {% if i &gt; 1 then %}，{% end %}  
          {* t.name *} = {* t.score *}  
      {% end %}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>  
      {# 中间内容不解析 #}  
      {-raw-}{(file)}{-raw-}  
{(footer.html)}  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="layout-布局统一风格" tabindex="-1"><a class="header-anchor" href="#layout-布局统一风格" aria-hidden="true">#</a> layout 布局统一风格</h3><p>使用模板内容嵌套可以实现全站风格同一布局</p><h4 id="lua-1" tabindex="-1"><a class="header-anchor" href="#lua-1" aria-hidden="true">#</a> lua</h4><p><code>local template = require &quot;resty.template&quot;</code></p><p>一、</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>local layout   = template.new &quot;layout.html&quot;

layout.title   = &quot;Testing lua-resty-template&quot;

layout.view    = template.compile &quot;view.html&quot; { message = &quot;Hello, World!&quot; }

layout:render()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二、</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>template.render(&quot;layout.html&quot;, {

  title = &quot;Testing lua-resty-template&quot;,

  msg = &quot;type=2&quot;,

  view  = template.compile &quot;view.html&quot; { message = &quot;Hello, World!&quot; }

})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三、</p><p>此方式重名变量值会被覆盖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>local view     = template.new(&quot;view.html&quot;, &quot;layout.html&quot;)

view.title     = &quot;Testing lua-resty-template&quot;

view.msg = &quot;type=3&quot;

view.message   = &quot;Hello, World!&quot;

view:render()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>四、</p><p>可以区分一下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>local layout   = template.new &quot;layout.html&quot;

layout.title   = &quot;Testing lua-resty-template&quot;

layout.msg = &quot;type=4&quot;

local view     = template.new(&quot;view.html&quot;, layout)

view.message   = &quot;Hello, World!&quot;

view:render()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="layout-html" tabindex="-1"><a class="header-anchor" href="#layout-html" aria-hidden="true">#</a> layout.html</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;

&lt;html&gt;

&lt;head&gt;

​    &lt;title&gt;{{title}}&lt;/title&gt;

&lt;/head&gt;

&lt;h1&gt;layout&lt;/h1&gt;

&lt;body&gt;

​    {*view*}

&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="view-html·" tabindex="-1"><a class="header-anchor" href="#view-html·" aria-hidden="true">#</a> view.html·</h4><p><code>msg:{{message}}</code></p><h4 id="多级嵌套" tabindex="-1"><a class="header-anchor" href="#多级嵌套" aria-hidden="true">#</a> 多级嵌套</h4><p>lua</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>local view     = template.new(&quot;view.html&quot;, &quot;layout.html&quot;)

view.title     = &quot;Testing lua-resty-template&quot;

view.message   = &quot;Hello, World!&quot;

view:render()

view.html

{% layout=&quot;section.html&quot; %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,53),oe=n("p",null,"section.html",-1),ce=n("div",{id:"section"},[n("p",null,[e("​ {"),n("em",null,"view"),e("} - sss")])],-1),pe=n("p",null,"layout.html",-1),ue=n("body",null,[n("p",null,[e("​ {"),n("em",null,"view"),e("}")])],-1),ve=i(`<h3 id="redis缓存-mysql-模板输出" tabindex="-1"><a class="header-anchor" href="#redis缓存-mysql-模板输出" aria-hidden="true">#</a> Redis缓存+mysql+模板输出</h3><p>lua</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  cjson = require &quot;cjson&quot;
sql=&quot;select * from t_emp&quot;


local redis = require &quot;resty.redis&quot;
                local red = redis:new()

                red:set_timeouts(1000, 1000, 1000) -- 1 sec

  local ok, err = red:connect(&quot;127.0.0.1&quot;, 6379)
 if not ok then
                    ngx.say(&quot;failed to connect: &quot;, err)
                    return
                end


        
                local res, err = red:get(sql)
                if not res then
                    ngx.say(&quot;failed to get sql: &quot;, err)
                    return
                end

                if res == ngx.null then
                    ngx.say(&quot;sql&quot;..sql..&quot; not found.&quot;)




--mysql查询
local mysql = require &quot;resty.mysql&quot;
                local db, err = mysql:new()
                if not db then
                    ngx.say(&quot;failed to instantiate mysql: &quot;, err)
                    return
                end

                db:set_timeout(1000) -- 1 sec


                local ok, err, errcode, sqlstate = db:connect{
                    host = &quot;192.168.44.211&quot;,
                    port = 3306,
                    database = &quot;zhangmen&quot;,
                    user = &quot;root&quot;,
                    password = &quot;111111&quot;,
                    charset = &quot;utf8&quot;,
                    max_packet_size = 1024 * 1024,
                }


                ngx.say(&quot;connected to mysql.&lt;br&gt;&quot;)


 res, err, errcode, sqlstate =
                    db:query(sql)
                if not res then
                    ngx.say(&quot;bad result: &quot;, err, &quot;: &quot;, errcode, &quot;: &quot;, sqlstate, &quot;.&quot;)
                    return
                end


          --ngx.say(&quot;result: &quot;, cjson.encode(res))



      ok, err = red:set(sql, cjson.encode(res))
                if not ok then
                    ngx.say(&quot;failed to set sql: &quot;, err)
                    return
                end

                ngx.say(&quot;set result: &quot;, ok)

                    return
                end








local template = require(&quot;resty.template&quot;)
template.caching(false)
local context = {
    title = &quot;测试&quot;,
    name = &quot;lucy&quot;,
    description = &quot;&lt;script&gt;alert(1);&lt;/script&gt;&quot;,
    age = 40,
    hobby = {&quot;电影&quot;, &quot;音乐&quot;, &quot;阅读&quot;},
    score = {语文 = 90, 数学 = 80, 英语 = 70},
    score2 = {
        {name = &quot;语文&quot;, score = 90},
        {name = &quot;数学&quot;, score = 80},
        {name = &quot;英语&quot;, score = 70},
    },

zhangmen=cjson.decode(res)

}





template.render(&quot;view.html&quot;, context)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模板</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
{(header.html)}  
   &lt;body&gt;  
      {# 不转义变量输出 #}  
      姓名：{* string.upper(name) *}&lt;br/&gt;  
      {# 转义变量输出 #}  

      年龄: {* age + 10 *}&lt;br/&gt;  
      {# 循环输出 #}  
      爱好：  
      {% for i, v in ipairs(hobby) do %}  
         {% if v == &#39;电影&#39; then  %} - xxoo
            
              {%else%}  - {* v *} 
{% end %}  
         
      {% end %}&lt;br/&gt;  
  
      成绩：  
      {% local i = 1; %}  
      {% for k, v in pairs(score) do %}  
         {% if i &gt; 1 then %}，{% end %}  
         {* k *} = {* v *}  
         {% i = i + 1 %}  
      {% end %}&lt;br/&gt;  
      成绩2：  
      {% for i = 1, #score2 do local t = score2[i] %}  
         {% if i &gt; 1 then %}，{% end %}  
          {* t.name *} = {* t.score *}  
      {% end %}&lt;br/&gt;  
      {# 中间内容不解析 #}  
      {-raw-}{(file)}{-raw-}  




掌门：
{* zhangmen *}



   {% for i = 1, #zhangmen do local z = zhangmen[i] %}  
         {* z.deptId *},{* z.age *},{* z.name *},{* z.empno *},&lt;br&gt;
      {% end %}&lt;br/&gt;  

{(footer.html)}  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lua-开源项目" tabindex="-1"><a class="header-anchor" href="#lua-开源项目" aria-hidden="true">#</a> Lua 开源项目</h2><h3 id="waf" tabindex="-1"><a class="header-anchor" href="#waf" aria-hidden="true">#</a> WAF</h3>`,7),me={href:"https://github.com/unixhot/waf",target:"_blank",rel:"noopener noreferrer"},he={href:"https://github.com/loveshell/ngx_lua_waf",target:"_blank",rel:"noopener noreferrer"},be=i('<p>l 防止 SQL 注入，本地包含，部分溢出，fuzzing 测试，XSS/SSRF 等 Web 攻击</p><p>l 防止 Apache Bench 之类压力测试工具的攻击</p><p>l 屏蔽常见的扫描黑客工具，扫描器</p><p>l 屏蔽图片附件类目录执行权限、防止 webshell 上传</p><p>l 支持 IP 白名单和黑名单功能，直接将黑名单的 IP 访问拒绝</p><p>l 支持 URL 白名单，将不需要过滤的 URL 进行定义</p><p>l 支持 User-Agent 的过滤、支持 CC 攻击防护、限制单个 URL 指定时间的访问次数</p><p>l 支持支持 Cookie 过滤，URL 与 URL 参数过滤</p><p>l 支持日志记录，将所有拒绝的操作，记录到日志中去</p><h3 id="kong-基于openresty的流量网关" tabindex="-1"><a class="header-anchor" href="#kong-基于openresty的流量网关" aria-hidden="true">#</a> Kong 基于Openresty的流量网关</h3>',10),ge={href:"https://konghq.com/",target:"_blank",rel:"noopener noreferrer"},ke={href:"https://github.com/kong/kong",target:"_blank",rel:"noopener noreferrer"},xe=i('<p>Kong 基于 OpenResty，是一个云原生、快速、可扩展、分布式的微服务抽象层（Microservice Abstraction Layer），也叫 API 网关（API Gateway），在 Service Mesh 里也叫 API 中间件（API Middleware）。</p><p>Kong 开源于 2015 年，核心价值在于高性能和扩展性。从全球 5000 强的组织统计数据来看，Kong 是现在依然在维护的，在生产环境使用最广泛的 API 网关。</p><p>Kong 宣称自己是世界上最流行的开源微服务 API 网关（The World’s Most Popular Open Source Microservice API Gateway）。</p><p>核心优势：</p><p>l 可扩展：可以方便的通过添加节点水平扩展，这意味着可以在很低的延迟下支持很大的系统负载。</p><p>l 模块化：可以通过添加新的插件来扩展 Kong 的能力，这些插件可以通过 RESTful Admin API 来安装和配置。</p><p>l 在任何基础架构上运行：Kong 可以在任何地方都能运行，比如在云或混合环境中部署 Kong，单个或全球的数据中心。</p><h3 id="apisix" tabindex="-1"><a class="header-anchor" href="#apisix" aria-hidden="true">#</a> APISIX</h3><h3 id="abtestinggateway" tabindex="-1"><a class="header-anchor" href="#abtestinggateway" aria-hidden="true">#</a> ABTestingGateway</h3>',9),_e={href:"https://github.com/CNSRE/ABTestingGateway",target:"_blank",rel:"noopener noreferrer"},ye=n("p",null,"ABTestingGateway 是一个可以动态设置分流策略的网关，关注与灰度发布相关领域，基于 Nginx 和 ngx-lua 开发，使用 Redis 作为分流策略数据库，可以实现动态调度功能。",-1),fe=n("p",null,"ABTestingGateway 是新浪微博内部的动态路由系统 dygateway 的一部分，目前已经开源。在以往的基于 Nginx 实现的灰度系统中，分流逻辑往往通过 rewrite 阶段的 if 和 rewrite 指令等实现，优点是性能较高，缺点是功能受限、容易出错，以及转发规则固定，只能静态分流。ABTestingGateway 则采用 ngx-lua，通过启用 lua-shared-dict 和 lua-resty-lock 作为系统缓存和缓存锁，系统获得了较为接近原生 Nginx 转发的性能。",-1),qe=n("p",null,"l 支持多种分流方式，目前包括 iprange、uidrange、uid 尾数和指定uid分流",-1),we=n("p",null,"l 支持多级分流，动态设置分流策略，即时生效，无需重启",-1),Te=n("p",null,"l 可扩展性，提供了开发框架，开发者可以灵活添加新的分流方式，实现二次开发",-1),ze=n("p",null,"l 高性能，压测数据接近原生 Nginx 转发",-1),Se=n("p",null,"l 灰度系统配置写在 Nginx 配置文件中，方便管理员配置",-1),Ce=n("p",null,"l 适用于多种场景：灰度发布、AB 测试和负载均衡等",-1);function Ne(t,$e){const s=p("ExternalLinkIcon");return r(),o("div",null,[v,n("p",null,[n("a",m,[e("http://nginx.org/en/docs/http/ngx_http_upstream_module.html#sticky"),a(s)])]),h,b,g,k,n("p",null,[n("a",x,[e("https://bitorg/nginx-goodies/nginx-sticky-module-ng/src/master/"),a(s)])]),_,n("p",null,[n("a",y,[e("https://github.com/bymaximus/nginx-sticky-module-ng"),a(s)])]),f,n("p",null,[n("a",q,[e("https://bitorg/nginx-goodies/nginx-sticky-module-ng/get/1.2.6.zip"),a(s)])]),w,n("p",null,[n("a",T,[e("https://www.charlesproxy.com/assets/release/4.6.2/charles-proxy-4.6.2-win64.msi?k=fc1457e312"),a(s)])]),z,n("p",null,[n("a",S,[e("https://www.charlesproxy.com"),a(s)])]),C,n("p",null,[n("a",N,[e("https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/"),a(s)])]),n("p",null,[n("a",$,[e("http://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_bind"),a(s)])]),P,n("p",null,[n("a",L,[e("https://www.nginx.com/resources/wiki/modules/concat/"),a(s)])]),E,n("p",null,[n("a",H,[e("https://github.com/alibaba/nginx-http-concat"),a(s)])]),A,n("p",null,[n("a",D,[e("http://nginx.org/en/docs/http/ngx_http_ssi_module.html"),a(s)])]),R,n("p",null,[n("a",M,[e("https://www.samba.org/ftp/rsync/rsync.html"),a(s)])]),I,n("p",null,[n("a",j,[e("maxmind.com"),a(s)])]),O,G,n("p",null,[n("a",W,[e("https://github.com/maxmind/libmaxminddb"),a(s)])]),K,n("p",null,[n("a",U,[e("https://github.com/leev/ngx_http_geoip2_module"),a(s)])]),B,n("p",null,[n("a",F,[e("http://nginx.org/en/docs/http/ngx_http_geoip_module.html#geoip_proxy"),a(s)])]),V,n("p",null,[n("a",X,[e("https://github.com/chobits/ngx_http_proxy_connect_module"),a(s)])]),J,n("p",null,[n("a",Y,[e("http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache"),a(s)])]),Q,n("p",null,[n("a",Z,[e("https://github.com/FRiCKLE/ngx_cache_purge"),a(s)])]),nn,n("p",null,[n("a",en,[e("http://nginx.org/en/docs/http/ngx_http_memcached_module.html"),a(s)])]),sn,n("p",null,[n("a",an,[e("https://codeload.github.com/redis/redis/tar.gz/refs/tags/7.0.0"),a(s)])]),tn,n("p",null,[n("a",ln,[e("https://www.nginx.com/resources/wiki/modules/redis2/"),a(s)])]),n("p",null,[n("a",dn,[e("https://github.com/openresty/redis2-nginx-module"),a(s)])]),rn,n("p",null,[n("a",on,[e("http://nginx.org/en/docs/stream/ngx_stream_core_module.html"),a(s)])]),cn,pn,un,n("p",null,[n("a",vn,[e("http://nginx.org/en/docs/http/ngx_http_limit_req_module.html"),a(s)])]),mn,n("p",null,[n("a",hn,[e("https://jmeter.apache.org/"),a(s)])]),bn,n("p",null,[n("a",gn,[e("http://nginx.org/en/docs/http/ngx_http_log_module.html"),a(s)])]),kn,n("p",null,[n("a",xn,[e("http://nginx.org/en/docs/http/ngx_http_empty_gif_module.html"),a(s)])]),_n,n("p",null,[n("a",yn,[e("http://nginx.org/en/docs/ngx_core_module.html#error_log"),a(s)])]),fn,qn,wn,Tn,n("p",null,[n("a",zn,[e("http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream"),a(s)])]),Sn,n("p",null,[n("a",Cn,[e("https://github.com/yaoweibin/nginx_upstream_check_module"),a(s)])]),Nn,n("p",null,[n("a",$n,[e("http://nginx.org/en/docs/http/ngx_http_upstream_hc_module.html"),a(s)])]),Pn,n("p",null,[e("官网："),n("a",Ln,[e("http://www.lua.org/"),a(s)])]),En,Hn,n("p",null,[n("a",An,[e("https://github.com/EmmyLua/IntelliJ-EmmyLua"),a(s)])]),n("p",null,[n("a",Dn,[e("https://emmylua.github.io/zh_CN/"),a(s)])]),Rn,n("p",null,[n("a",Mn,[e("https://www.eclipse.org/ldt/"),a(s)])]),In,n("p",null,[e("以CentOS举例 其他系统参照："),n("a",jn,[e("http://openresty.org/cn/linux-packages.html"),a(s)])]),On,Gn,n("p",null,[e(" yum-config-manager --add-repo "),n("a",Wn,[e("https://openresty.org/package/centos/openresty.repo"),a(s)])]),Kn,Un,Bn,Fn,Vn,Xn,n("p",null,[n("a",Jn,[e("http://openresty.org/cn/download.html"),a(s)])]),Yn,n("p",null,[n("a",Qn,[e("https://github.com/openresty/lua-resty-lrucache"),a(s)])]),Zn,n("p",null,[n("a",ne,[e("https://github.com/openresty/lua-resty-redis"),a(s)])]),ee,n("p",null,[n("a",se,[e("https://github.com/steve0511/resty-redis-cluster"),a(s)])]),ae,n("p",null,[n("a",ie,[e("https://github.com/openresty/lua-resty-mysql"),a(s)])]),te,n("p",null,[n("a",le,[e("https://github.com/bungle/lua-resty-template"),a(s)])]),de,n("p",null,"l "+l(t.var)+"：变量转义输出；",1),re,n("h1",null,"msg:"+l(t.message),1),oe,ce,pe,c("DOCTYPE html"),n("html",null,[n("head",null,[n("p",null,[e("​ "),n("title",null,l(t.title),1)])]),n("h1",null,"layout "+l(t.msg),1),ue]),ve,n("p",null,[n("a",me,[e("https://github.com/unixhot/waf"),a(s)])]),n("p",null,[n("a",he,[e("https://github.com/loveshell/ngx_lua_waf"),a(s)])]),be,n("p",null,[n("a",ge,[e("https://konghq.com/"),a(s)])]),n("p",null,[n("a",ke,[e("https://github.com/kong/kong"),a(s)])]),xe,n("p",null,[n("a",_e,[e("https://github.com/CNSRE/ABTestingGateway"),a(s)])]),ye,fe,qe,we,Te,ze,Se,Ce])}const Ee=d(u,[["render",Ne],["__file","Nginx高级课程扩容与高效.html.vue"]]);export{Ee as default};
