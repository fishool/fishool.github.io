import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as u,a as n,b as e,f as a,d as i,r as o}from"./app.5f15ca94.js";const d={},c=n("h1",{id:"elasticsearch7-x搜索实战",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#elasticsearch7-x搜索实战","aria-hidden":"true"},"#"),e(" Elasticsearch7.x搜索实战")],-1),r=n("h3",{id:"官方文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#官方文档","aria-hidden":"true"},"#"),e(" 官方文档")],-1),v={href:"https://www.elastic.co/guide/index.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.elastic.co/guide/en/elasticsearch/client/java-api-client/8.4/introduction.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/index.html",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.elastic.co/guide/en/beats/filebeat/current/index.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.elastic.co/guide/cn/kibana/current/index.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.elastic.co/guide/en/logstash/current/index.html",target:"_blank",rel:"noopener noreferrer"},g=i('<h2 id="第一部分-全文搜索引擎elasticsearch基础" tabindex="-1"><a class="header-anchor" href="#第一部分-全文搜索引擎elasticsearch基础" aria-hidden="true">#</a> 第一部分 全文搜索引擎Elasticsearch基础</h2><h3 id="第1节-elasticsearch是什么" tabindex="-1"><a class="header-anchor" href="#第1节-elasticsearch是什么" aria-hidden="true">#</a> 第1节 Elasticsearch是什么</h3><p>Elaticsearch简称为ES,是一个开源的可扩展的分布式的全文检索引擎，它可以近乎实时的存储、检索数 据。本身扩展性很好，可扩展到上百台服务器，处理PB级别的数据。ES使用Java开发并使用Lucene作 为其核心来实现索引和搜索的功能，但是它通过简单的RestfulAPI和javaAPI来隐藏Lucene的复杂性， 从而让全文搜索变得简单。</p><h3 id="第2节-elasticsearch的功能" tabindex="-1"><a class="header-anchor" href="#第2节-elasticsearch的功能" aria-hidden="true">#</a> 第2节 Elasticsearch的功能</h3><ul><li>分布式的搜索引擎 分布式：Elasticsearch自动将海量数据分散到多台服务器上去存储和检索 搜索：百度、谷歌，站内搜索</li><li>全文检索 提供模糊搜索等自动度很高的查询方式，并进行相关性排名，高亮等功能</li><li>数据分析引擎（分组聚合） 电商网站，最近一周笔记本电脑这种商品销量排名top10的商家有哪些？新闻网站，最近1个月访 问量排名top3的新闻板块是哪些</li><li>对海量数据进行近实时的处理 海量数据的处理：因为是分布式架构，Elasticsearch可以采用大量的服务器去存储和检索数据，自 然而然就可以实现海量数据的处理 近实时：Elasticsearch可以实现秒级别的数据搜索和分析</li></ul><h3 id="第3节-elasticsearch的特点" tabindex="-1"><a class="header-anchor" href="#第3节-elasticsearch的特点" aria-hidden="true">#</a> 第3节 Elasticsearch的特点</h3><blockquote><p>Elasticsearch的特点是它提供了一个极速的搜索体验。这源于它的高速（speed）。相比较其它 的一些大数据引擎，Elasticsearch可以实现秒级的搜索，速度非常有优势。Elasticsearch的 cluster是一种分布式的部署，极易扩展(scale )这样很容易使它处理PB级的数据库容量。最重要 的是Elasticsearch是它搜索的结果可以按照分数进行排序，它能提供我们最相关的搜索结果 （relevance)</p></blockquote><ol><li>安装方便：没有其他依赖，下载后安装非常方便；只用修改几个参数就可以搭建起来一个集群</li><li>JSON：输入/输出格式为 JSON，意味着不需要定义 Schema，快捷方便</li><li>RESTful：基本所有操作 ( 索引、查询、甚至是配置 ) 都可以通过 HTTP 接口进行</li><li>分布式：节点对外表现对等（每个节点都可以用来做入口） 加入节点自动负载均衡</li><li>多租户：可根据不同的用途分索引，可以同时操作多个索引</li><li>支持超大数据： 可以扩展到 PB 级的结构化和非结构化数据 海量数据的近实时处理</li></ol><h3 id="第3节-elasticsearch的特点-1" tabindex="-1"><a class="header-anchor" href="#第3节-elasticsearch的特点-1" aria-hidden="true">#</a> 第3节 Elasticsearch的特点</h3><ol><li>搜索类场景 比如说电商网站、招聘网站、新闻资讯类网站、各种app内的搜索。</li><li>日志分析类场景 经典的ELK组合（Elasticsearch/Logstash/Kibana），可以完成日志收集，日志存储，日志分析查 询界面基本功能，目前该方案的实现很普及，大部分企业日志分析系统使用了该方案。</li><li>数据预警平台及数据分析场景 例如电商价格预警，在支持的电商平台设置价格预警，当优惠的价格低于某个值时，触发通知消 息，通知用户购买。 数据分析常见的比如分析电商平台销售量top 10的品牌，分析博客系统、头条网站top 10关注度、 评论数、访问量的内容等等。</li><li>商业BI(Business Intelligence)系统 比如大型零售超市，需要分析上一季度用户消费金额，年龄段，每天各时间段到店人数分布等信 息，输出相应的报表数据，并预测下一季度的热卖商品，根据年龄段定向推荐适宜产品。 Elasticsearch执行数据分析和挖掘，Kibana做数据可视化。</li></ol><p>维基百科、百度百科：有全文检索、高亮、搜索推荐功能 stack overflow：有全文检索，可以根据报错关键信息，去搜索解决方法。 github：从上千亿行代码中搜索你想要的关键代码和项目。 日志分析系统：各企业内部搭建的ELK平台</p><h3 id="elk-环境搭建" tabindex="-1"><a class="header-anchor" href="#elk-环境搭建" aria-hidden="true">#</a> ELK 环境搭建</h3>',12),y={href:"https://github.com/fishool/spring-boot-demo.git",target:"_blank",rel:"noopener noreferrer"},_=i(`<details class="custom-container details"><summary>elastic-compose.yml</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
 <span class="token key atrule">es8</span><span class="token punctuation">:</span>
  <span class="token key atrule">hostname</span><span class="token punctuation">:</span> es8
  <span class="token key atrule">container_name</span><span class="token punctuation">:</span> es8
  <span class="token key atrule">image</span><span class="token punctuation">:</span> elasticsearch<span class="token punctuation">:</span>8.4.0
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> <span class="token string">&quot;/data/elk/es8/logs:/usr/share/es8/logs:rw&quot;</span>
   <span class="token punctuation">-</span> <span class="token string">&quot;/data/elk/es8/data:/usr/share/es8/data:rw&quot;</span>
  <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> <span class="token string">&quot;9200:9200&quot;</span>
   <span class="token punctuation">-</span> <span class="token string">&quot;9300:9300&quot;</span>
  <span class="token key atrule">environment</span><span class="token punctuation">:</span>
   <span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> elasticsearch
   <span class="token key atrule">discovery.type</span><span class="token punctuation">:</span> single<span class="token punctuation">-</span>node
  <span class="token key atrule">logging</span><span class="token punctuation">:</span>
   <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;json-file&quot;</span>
   <span class="token key atrule">options</span><span class="token punctuation">:</span>
    <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;100m&quot;</span>
 <span class="token key atrule">kibana</span><span class="token punctuation">:</span>
  <span class="token key atrule">hostname</span><span class="token punctuation">:</span> kibana
  <span class="token key atrule">container_name</span><span class="token punctuation">:</span> kibana
  <span class="token key atrule">image</span><span class="token punctuation">:</span> kibana<span class="token punctuation">:</span>8.4.3
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> <span class="token string">&quot;/data/elk/kibana/kibana.yml:/usr/share/kibana/config/kibana.yml&quot;</span>
  <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> <span class="token string">&quot;5601:5601&quot;</span>
  <span class="token key atrule">logging</span><span class="token punctuation">:</span>
   <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;json-file&quot;</span>
   <span class="token key atrule">options</span><span class="token punctuation">:</span>
    <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;100m&quot;</span>
  <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> es8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>es8安装过程.txt</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>1. 启动
   docker<span class="token punctuation">-</span>compose <span class="token punctuation">-</span>f elastic<span class="token punctuation">-</span>compose.yml up <span class="token punctuation">-</span>d

2. 进入容器
   docker exec <span class="token punctuation">-</span>it <span class="token punctuation">-</span><span class="token punctuation">-</span>user root es8 /bin/bash

3. 安装应用
   apt<span class="token punctuation">-</span>get update
   apt<span class="token punctuation">-</span>get install vim

4. 修改配置文件 关闭ssl验证
   vim /usr/share/elasticsearch/config/elasticsearch.yml

<span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> <span class="token string">&quot;elasticsearch&quot;</span>
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> 0.0.0.0

<span class="token comment"># Enable security features</span>
<span class="token key atrule">xpack.security.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">xpack.security.enrollment.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment"># Enable encryption for HTTP API client connections, such as Kibana, Logstash, and Agents</span>
<span class="token key atrule">xpack.security.http.ssl</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">keystore.path</span><span class="token punctuation">:</span> certs/http.p12

<span class="token comment"># Enable encryption and mutual authentication between cluster nodes</span>
<span class="token key atrule">xpack.security.transport.ssl</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">verification_mode</span><span class="token punctuation">:</span> certificate
    <span class="token key atrule">keystore.path</span><span class="token punctuation">:</span> certs/transport.p12
    <span class="token key atrule">truststore.path</span><span class="token punctuation">:</span> certs/transport.p12


5. 重启服务应用
   docker restart es8

6. 重置用户名密码
   /usr/share/elasticsearch/bin/elasticsearch<span class="token punctuation">-</span>setup<span class="token punctuation">-</span>passwords interactive
   用户分别为
   elastic
   apm_system
   kibana
   logstash_system
   beats_system
   remote_monitoring_user
<span class="token key atrule">ext</span><span class="token punctuation">:</span>
分词插件
cd /usr/share/elasticsearch/plugins
mkdir analysis<span class="token punctuation">-</span>ik
cd analysis<span class="token punctuation">-</span>ik
wget https<span class="token punctuation">:</span>//github.com/medcl/elasticsearch<span class="token punctuation">-</span>analysis<span class="token punctuation">-</span>ik/releases/download/v8.4.0/elasticsearch<span class="token punctuation">-</span>analysis<span class="token punctuation">-</span>ik<span class="token punctuation">-</span>8.4.0.zip
unzip  elasticsearch<span class="token punctuation">-</span>analysis<span class="token punctuation">-</span>ik<span class="token punctuation">-</span>8.4.0.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>kibana.yml</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#Default Kibana configuration for docker target</span>
<span class="token key atrule">server.name</span><span class="token punctuation">:</span> kibana
<span class="token key atrule">server.host</span><span class="token punctuation">:</span> <span class="token string">&quot;0.0.0.0&quot;</span>
<span class="token key atrule">elasticsearch.hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;http://es8:9200&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">xpack.monitoring.ui.container.elasticsearch.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">elasticsearch.username</span><span class="token punctuation">:</span> <span class="token string">&quot;kibana&quot;</span>
<span class="token key atrule">elasticsearch.password</span><span class="token punctuation">:</span> <span class="token string">&quot;elastic&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="elasticsearch之入门使用" tabindex="-1"><a class="header-anchor" href="#elasticsearch之入门使用" aria-hidden="true">#</a> Elasticsearch之入门使用</h2><blockquote><p>Elasticsearch是基于Lucene的全文检索引擎，本质也是存储和检索数据。ES中的很多概念与MySQL类 似 我们可以按照关系型数据库的经验去理解</p></blockquote>`,5),x=n("li",null,"索引(index) 类似的数据放在一个索引，非类似的数据放不同索引， 一个索引也可以理解成一个关系型数据 库",-1),f=n("li",null,"类型(type) es8 移除",-1),w={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html#_multi_fields_2",target:"_blank",rel:"noopener noreferrer"},E=i(`<h3 id="分词器使用" tabindex="-1"><a class="header-anchor" href="#分词器使用" aria-hidden="true">#</a> 分词器使用</h3><h3 id="ik分词器安装" tabindex="-1"><a class="header-anchor" href="#ik分词器安装" aria-hidden="true">#</a> IK分词器安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>分词插件
cd /usr/share/elasticsearch/plugins
mkdir analysis-ik
cd analysis-ik
wget https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v8.4.0/elasticsearch-analysis-ik-8.4.0.zip
unzip  elasticsearch-analysis-ik-8.4.0.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试案例 IK分词器有两种分词模式：ik_max_word和ik_smart模式。 1）ik_max_word (常用) 会将文本做最细粒度的拆分 2）ik_smart 会做最粗粒度的拆分</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST _analyze
{
    &quot;analyzer&quot;: &quot;ik_max_word&quot;,
    &quot;text&quot;: &quot;南京市长江大桥&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ik_max_word 分词模式运行得到结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;tokens&quot;: [
    {
      &quot;token&quot;: &quot;南京市&quot;,
      &quot;start_offset&quot;: 0,
      &quot;end_offset&quot;: 3,
      &quot;type&quot;: &quot;CN_WORD&quot;,
      &quot;position&quot;: 0
    },
    {
      &quot;token&quot;: &quot;南京&quot;,
      &quot;start_offset&quot;: 0,
      &quot;end_offset&quot;: 2,
      &quot;type&quot;: &quot;CN_WORD&quot;,
      &quot;position&quot;: 1
    },
    {
      &quot;token&quot;: &quot;市长&quot;,
      &quot;start_offset&quot;: 2,
      &quot;end_offset&quot;: 4,
      &quot;type&quot;: &quot;CN_WORD&quot;,
      &quot;position&quot;: 2
    },
    {
      &quot;token&quot;: &quot;长江大桥&quot;,
      &quot;start_offset&quot;: 3,
      &quot;end_offset&quot;: 7,
      &quot;type&quot;: &quot;CN_WORD&quot;,
      &quot;position&quot;: 3
    },
    {
      &quot;token&quot;: &quot;长江&quot;,
      &quot;start_offset&quot;: 3,
      &quot;end_offset&quot;: 5,
      &quot;type&quot;: &quot;CN_WORD&quot;,
      &quot;position&quot;: 4
    },
    {
      &quot;token&quot;: &quot;大桥&quot;,
      &quot;start_offset&quot;: 5,
      &quot;end_offset&quot;: 7,
      &quot;type&quot;: &quot;CN_WORD&quot;,
      &quot;position&quot;: 5
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST _analyze
{
&quot;analyzer&quot;: &quot;ik_smart&quot;,
&quot;text&quot;: &quot;南京市长江大桥&quot;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ik_smart分词模式运行得到结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;tokens&quot;: [
    {
      &quot;token&quot;: &quot;南京市&quot;,
      &quot;start_offset&quot;: 0,
      &quot;end_offset&quot;: 3,
      &quot;type&quot;: &quot;CN_WORD&quot;,
      &quot;position&quot;: 0
    },
    {
      &quot;token&quot;: &quot;长江大桥&quot;,
      &quot;start_offset&quot;: 3,
      &quot;end_offset&quot;: 7,
      &quot;type&quot;: &quot;CN_WORD&quot;,
      &quot;position&quot;: 1
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果现在假如江大桥是一个人名，是南京市市长，那么上面的分词显然是不合理的，该怎么办？</p><h3 id="扩展词典使用" tabindex="-1"><a class="header-anchor" href="#扩展词典使用" aria-hidden="true">#</a> 扩展词典使用</h3><p>1）进入到 plugins/analysis-ik/config(安装包安装方式) 目录 下, 新增自定义词典</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim lagou_ext_dict.dic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入 ：江大桥</p><p>2）将我们自定义的扩展词典文件添加到IKAnalyzer.cfg.xml配置中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim IKAnalyzer.cfg.xm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE properties SYSTEM &quot;http://java.sun.com/dtd/properties.dtd&quot;&gt;
&lt;properties&gt;
    &lt;comment&gt;IK Analyzer 扩展配置&lt;/comment&gt;
    &lt;!--用户可以在这里配置自己的扩展字典 --&gt;
    &lt;entry key=&quot;ext_dict&quot;&gt;lagou_ext_dict.dic&lt;/entry&gt;
    &lt;!--用户可以在这里配置自己的扩展停止词字典--&gt;
    &lt;entry key=&quot;ext_stopwords&quot;&gt;lagou_stop_dict.dic&lt;/entry&gt;
    &lt;!--用户可以在这里配置远程扩展字典 --&gt;
    &lt;!-- &lt;entry
    key=&quot;remote_ext_dict&quot;&gt;http://192.168.211.130:8080/tag.dic&lt;/entry&gt; --&gt;
    &lt;!--用户可以在这里配置远程扩展停止词字典--&gt;
    &lt;!-- &lt;entry key=&quot;remote_ext_stopwords&quot;&gt;words_location&lt;/entry&gt; --&gt;
&lt;/properties&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3）重启Elasticsearch</p><h3 id="停用词典使用" tabindex="-1"><a class="header-anchor" href="#停用词典使用" aria-hidden="true">#</a> 停用词典使用</h3><p>停用词：有些词在文本中出现的频率非常高。但对本文的语义产生不了多大的影响。例如英文的a、 an、the、of等。或中文的”的、了、呢等”。这样的词称为停用词。停用词经常被过滤掉，不会被进行 索引。在检索的过程中，如果用户的查询词中含有停用词，系统会自动过滤掉。停用词可以加快索引的 速度，减少索引库文件的大小</p><p>vim lagou_stop_dict.dic</p><h3 id="同义词典使用" tabindex="-1"><a class="header-anchor" href="#同义词典使用" aria-hidden="true">#</a> 同义词典使用</h3><p>语言博大精深，有很多相同意思的词，我们称之为同义词，比如“番茄”和“西红柿”，“馒头”和“馍”等。在 搜索的时候，我们输入的可能是“番茄”，但是应该把含有“西红柿”的数据一起查询出来，这种情况叫做 同义词查询。 注意：扩展词和停用词是在索引的时候使用，而同义词是检索时候使用。 配置IK同义词 Elasticsearch 自带一个名为 synonym 的同义词 filter。为了能让 IK 和 synonym 同时工作，我们需要 定义新的 analyzer，用 IK 做 tokenizer，synonym 做 filter。听上去很复杂，实际上要做的只是加一段 配置。 1）创建/config/analysis-ik/synonym.txt 文件，输入一些同义词并存为 utf-8 格式。例如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lagou,拉勾
china,中国
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>1）创建索引时，使用同义词配置，示例模板如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT / lagou - es - synonym {
	&quot;settings&quot;: {
		&quot;analysis&quot;: {
			&quot;filter&quot;: {
				&quot;word_sync&quot;: {
					&quot;type&quot;: &quot;synonym&quot;,
					&quot;synonyms_path&quot;: &quot;analysis-ik/synonym.txt&quot;
				}
			},
			&quot;analyzer&quot;: {
				&quot;ik_sync_max_word&quot;: {
					&quot;filter&quot;: [
						&quot;word_sync&quot;
					],
					&quot;type&quot;: &quot;custom&quot;,
					&quot;tokenizer&quot;: &quot;ik_max_word&quot;
				},
				&quot;ik_sync_smart&quot;: {
					&quot;filter&quot;: [
						&quot;word_sync&quot;
					],
					&quot;type&quot;: &quot;custom&quot;,
					&quot;tokenizer&quot;: &quot;ik_smart&quot;
				}
			}
		}
	},
	&quot;mappings&quot;: {
		&quot;properties&quot;: {
			&quot;name&quot;: {
				&quot;type&quot;: &quot;text&quot;,
				&quot;analyzer&quot;: &quot;ik_sync_max_word&quot;,
				&quot;search_analyzer&quot;: &quot;ik_sync_max_word&quot;
			}
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插入数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /lagou-es-synonym/_doc/1
{
    &quot;name&quot;:&quot;拉勾是中国专业的互联网招聘平台&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用同义词&quot;lagou&quot;或者“china”进行搜索</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /lagou-es-synonym/_doc/_search
{
    &quot;query&quot;: {
        &quot;match&quot;: {
            &quot;name&quot;: &quot;lagou&quot;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="索引操作-创建、查看、删除" tabindex="-1"><a class="header-anchor" href="#索引操作-创建、查看、删除" aria-hidden="true">#</a> 索引操作（创建、查看、删除）</h3><ol><li>创建索引库</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>put lagou-company-index
{
    &quot;settings&quot;:{
        &quot;number_of_shards&quot;:3,
        &quot;number_of_replicas&quot;:2
    },
    &quot;mappings&quot;: {
      &quot;properties&quot;:{
        &quot;name&quot;:{
          &quot;type&quot;:&quot;keyword&quot;
        },
        &quot;age&quot;:{
          &quot;type&quot;: &quot;long&quot;
        },
        &quot;address&quot;:{
          &quot;type&quot;:&quot;text&quot;
        },
        &quot;birthday&quot;:{
           &quot;type&quot;: &quot;date&quot;,
           &quot;format&quot;: &quot;yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis&quot; 
        }
      }
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>判断所有是否存在</li></ol><blockquote><p>HEAD /lagou-company-index</p></blockquote><ol start="3"><li>查看所有信息</li></ol><blockquote><p>GET /lagou-company-index</p></blockquote><ol start="4"><li>打开索引</li></ol><blockquote><p>POST /lagou-company-index/_open</p></blockquote><ol start="5"><li>关闭索引</li></ol><blockquote><p>POST /lagou-company-index/_close</p></blockquote><ol start="6"><li>删除索引库</li></ol><blockquote><p>DELETE /索引名称1,索引名称2</p></blockquote><h3 id="映射操作" tabindex="-1"><a class="header-anchor" href="#映射操作" aria-hidden="true">#</a> 映射操作</h3><p>索引创建之后，等于有了关系型数据库中的database。 我们需要设置字段的约束信息，叫做字段映射（mapping）</p>`,46),T={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.3/mapping-params.html",target:"_blank",rel:"noopener noreferrer"},P=i(`<ul><li>type：类型，可以是text、long、short、date、integer、object等</li><li>index：是否索引，默认为true</li><li>store：是否存储，默认为false</li><li>analyzer：指定分词器</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /lagou-company-index

PUT /lagou-company-index/_mapping/ {
	&quot;properties&quot;: {
		&quot;name&quot;: {
			&quot;type&quot;: &quot;text&quot;,
			&quot;analyzer&quot;: &quot;ik_max_word&quot;
		},
		&quot;job&quot;: {
			&quot;type&quot;: &quot;text&quot;,
			&quot;analyzer&quot;: &quot;ik_max_word&quot;
		},
		&quot;logo&quot;: {
			&quot;type&quot;: &quot;keyword&quot;,
			&quot;index&quot;: &quot;false&quot;
		},
		&quot;payment&quot;: {
			&quot;type&quot;: &quot;float&quot;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),z={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.3/mapping-types.html",target:"_blank",rel:"noopener noreferrer"},S=i(`<div class="custom-container info"><p class="custom-container-title">常用数据类型</p><ol><li>String类型，又分两种：</li></ol><ul><li>text：可分词，不可参与聚合</li><li>keyword：不可分词，数据会作为完整字段进行匹配，可以参与聚合</li><li>Numerical：数值类型，分两类</li></ul><ol start="2"><li>基本数据类型：long、interger、short、byte、double、float、half_float</li></ol><ul><li>浮点数的高精度类型：scaled_float 需要指定一个精度因子，比如10或100。elasticsearch会把真实值乘以这个因子后存 储，取出时再还原。</li></ul><ol start="3"><li>Date：日期类型</li></ol><ul><li>elasticsearch可以对日期格式化为字符串存储，但是建议我们存储为毫秒值，存储为long，节省空间。</li><li>Array：数组类型 进行匹配时，任意一个元素满足，都认为满足 排序时，如果升序则用数组中的最小值来排序，如果降序则用数组中的最大值来排序</li><li>Object：对象</li></ul></div><p>3.查看映射关系</p><blockquote><p>GET /索引名称/_mapping</p></blockquote><h3 id="索引配置相关优化" tabindex="-1"><a class="header-anchor" href="#索引配置相关优化" aria-hidden="true">#</a> 索引配置相关优化</h3><div class="custom-container info"><p class="custom-container-title">索引配置相关优化</p><ol><li>分片数量</li></ol><blockquote><p>索引分片数量 &lt;= 节点数量 (不超过16个) , 单个分片数据容量上限不超过50gb</p></blockquote><ol start="2"><li>副本数量</li></ol><blockquote><p>索引副本数量小于节点数量 (可多可少, 读/写性能彼增我减)</p></blockquote><p>数据模型设计原则</p><ul><li>简单模型原则<br> 能平铺模型搞定, 尽量平铺<br> 对象深度建议不要超过2 - 3级</li><li>最细粒度原则<br> 对象嵌套遵循最细粒度,上层数据冗余处理 (商品-订单 订单为最细粒度,可以冗余商品的信息)</li><li>多索引原则<br> 单一索引尽量满足单一业务场景</li><li>大宽表索引原则<br> 特殊场景合并多个索引时 , 尽量全部合并在一起 , es不支持join操作</li></ul></div><h3 id="文档增删改查及局部更新" tabindex="-1"><a class="header-anchor" href="#文档增删改查及局部更新" aria-hidden="true">#</a> 文档增删改查及局部更新</h3><p>文档，即索引库中的数据，会根据规则创建索引，将来用于搜索。可以类比做数据库中的一行数据</p><ol><li>新增文档</li></ol><p>新增文档时，涉及到id的创建方式，手动指定或者自动生成</p><p>_doc/1 指定id=1 _doc/ 系统生成id</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /lagou-company-index/_doc/1
{
    &quot;name&quot; : &quot;百度&quot;,
    &quot;job&quot; : &quot;小度用户运营经理&quot;,
    &quot;payment&quot; : &quot;30000&quot;,
    &quot;logo&quot; :
    &quot;http://www.lgstatic.com/thubnail_120x120/i/image/M00/21/3E/CgpFT1kVdzeAJNbUAABJB7x9sm8374.png&quot;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>查看所有文档</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /索引名称/_search
{
    &quot;query&quot;:{
        &quot;match_all&quot;: {
    }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>_source定制返回结果<br> 某些业务场景下，我们不需要搜索引擎返回source中的所有字段，可以使用source进行定制， 如下，多个字段之间使用逗号分隔</li></ol><blockquote><p>GET /lagou-company-index/_doc/1?_source=name,j</p></blockquote><ol start="5"><li><p>更新文档（全部更新）<br> 把刚才新增的请求方式改为PUT，就是修改了，不过修改必须指定id<br> id对应文档存在，则修改<br> id对应文档不存在，则新增<br> 比如，我们把使用id为3，不存在，则应该是新增</p></li><li><p>更新文档（局部更新）<br> Elasticsearch可以使用PUT或者POST对文档进行更新(全部更新)，如果指定ID的文档已经存在，则执行更新操作。<br> 注意：Elasticsearch执行更新操作的时候，Elasticsearch首先将旧的文档标记为删除状态，然后添加新<br> 的文档，旧的文档不会立即消失，但是你也无法访问，Elasticsearch会在你继续添加更多数据的时候在<br> 后台清理已经标记为删除状态的文档。<br> 全部更新，是直接把之前的老数据，标记为删除状态，然后，再添加一条更新的（使用PUT或者POST）<br> 局域更新，只是修改某个字段（使用POST）</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /索引名/_update/{id}
{
   &quot;doc&quot;:{
    &quot;field&quot;:&quot;value&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建索引模板" tabindex="-1"><a class="header-anchor" href="#创建索引模板" aria-hidden="true">#</a> 创建索引模板</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /_template/log_template
{
  &quot;index_patterns&quot;: [&quot;*&quot;],
  &quot;order&quot;: 0,
  &quot;settings&quot;: {
    &quot;number_of_replicas&quot;: 2,
    &quot;number_of_shards&quot;: 3
  }
}

PUT /_template/log_template
{
  &quot;index_patterns&quot;: [&quot;logfile-*&quot;],
  &quot;order&quot;: 1,
  &quot;settings&quot;: {
    &quot;number_of_replicas&quot;: 2,
    &quot;number_of_shards&quot;: 3
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function O(I,K){const s=o("ExternalLinkIcon");return l(),u("div",null,[c,r,n("p",null,[n("a",v,[e("Elastic Docs"),a(s)])]),n("p",null,[n("a",p,[e("Elasticsearch Guide"),a(s)])]),n("p",null,[n("a",m,[e("Elasticsearch Java API Client 8.4"),a(s)])]),n("p",null,[n("a",b,[e("Java High Level REST Client 7.17 已过期"),a(s)])]),n("p",null,[n("a",q,[e("Filebeat Reference"),a(s)])]),n("p",null,[n("a",k,[e("Kibana Guide"),a(s)])]),n("p",null,[n("a",h,[e("Logstash Reference"),a(s)])]),g,n("p",null,[e("详细见: "),n("a",y,[e("demo-elasticsearch-rest-high-level-client"),a(s)])]),_,n("ul",null,[x,f,n("li",null,[e("映射(mapping) mapping定义了每个字段的类型等信息。相当于关系型数据库中的表结构。 常用数据类型：text、keyword、number、array、range、boolean、date、geo_point、ip、 nested、object "),n("a",w,[e("mapping-types官网解释"),a(s)])])]),E,n("p",null,[n("a",T,[e("mapping参数官网注释"),a(s)]),e(" 1.创建映射字段 字段名：任意填写，下面指定许多属性，例如：")]),P,n("p",null,[n("a",z,[e("官网字段类型文档"),a(s)]),e(" 我们说几个关键的：")]),S])}const L=t(d,[["render",O],["__file","elastic7实战.html.vue"]]);export{L as default};
