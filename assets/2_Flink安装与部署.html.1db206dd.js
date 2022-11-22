import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as s,a as e,b as n,f as r,d as a,r as d}from"./app.5f15ca94.js";const c={},p=a(`<h1 id="flink安装与部署" tabindex="-1"><a class="header-anchor" href="#flink安装与部署" aria-hidden="true">#</a> Flink安装与部署</h1><h2 id="第四部分-flink安装和部署" tabindex="-1"><a class="header-anchor" href="#第四部分-flink安装和部署" aria-hidden="true">#</a> 第四部分 Flink安装和部署</h2><p>​ Flink支持多种安装模式</p><ul><li>local（本地）：单机模式，一般本地开发调试使用</li><li>StandAlone 独立模式：Flink自带集群，自己管理资源调度，生产环境也会有所应用</li><li>Yarn模式：计算资源统一由Hadoop YARN管理，生产环境应用较多</li></ul><h3 id="第-1-节-环境准备工作" tabindex="-1"><a class="header-anchor" href="#第-1-节-环境准备工作" aria-hidden="true">#</a> 第 1 节 环境准备工作</h3><h4 id="_1-1-基础环境" tabindex="-1"><a class="header-anchor" href="#_1-1-基础环境" aria-hidden="true">#</a> 1.1 基础环境</h4><ul><li><p>jdk1.8及以上【配置JAVA_HOME环境变量】</p></li><li><p>ssh免密码登录【集群内节点之间免密登录】</p></li></ul><h4 id="_1-2-安装包下载" tabindex="-1"><a class="header-anchor" href="#_1-2-安装包下载" aria-hidden="true">#</a> 1.2 安装包下载</h4><p>配套资料文件夹中提供，使用Flink1.7.2版本</p><h4 id="_1-3-集群规划" tabindex="-1"><a class="header-anchor" href="#_1-3-集群规划" aria-hidden="true">#</a> 1.3 集群规划</h4><table><thead><tr><th>teacher1</th><th>teacher2</th><th>teacher3</th></tr></thead><tbody><tr><td>JobManager+TaskManager</td><td>TaskManager</td><td>TaskManager</td></tr></tbody></table><h4 id="_1-4-standalone模式部署" tabindex="-1"><a class="header-anchor" href="#_1-4-standalone模式部署" aria-hidden="true">#</a> 1.4 StandAlone模式部署</h4><p>Step1、Flink安装包上传到teacher1对应目录并解压</p><p>Step2、修改 flink/conf/flink-conf.yaml 文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> jobmanager.rpc.address: teacher1
 taskmanager.numberOfTaskSlots: <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Step3、修改 /conf/slave文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>teacher1
teacher2
teacher3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Step4、standalone模式启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bin目录下执行./start-cluster.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Step5、jps进程查看核实</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3857 TaskManagerRunner
3411 StandaloneSessionClusterEntrypoint
3914 Jps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Step6、查看Flink的web页面 ip:8081/#/overview</p><p><img src="https://img2018.cnblogs.com/blog/1109081/201908/1109081-20190802150638658-520911561.png" alt="web" loading="lazy"></p><p>Step7、集群模式下运行example测试</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./flink run ../examples/streaming/WordCount.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Step8、查看结果文件</p><p><strong>注意：集群搭建完毕后，Flink程序就可以达成Jar，在集群环境下类似于Step7中一样提交执行计算任务</strong></p><p><strong>打jar包插件：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;build&gt;
        &lt;plugins&gt;
            &lt;!-- 打jar插件 --&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
                &lt;artifactId&gt;maven-shade-plugin&lt;/artifactId&gt;
                &lt;version&gt;2.4.3&lt;/version&gt;
                &lt;executions&gt;
                    &lt;execution&gt;
                        &lt;phase&gt;package&lt;/phase&gt;
                        &lt;goals&gt;
                            &lt;goal&gt;shade&lt;/goal&gt;
                        &lt;/goals&gt;
                        &lt;configuration&gt;
                            &lt;filters&gt;
                                &lt;filter&gt;
                                    &lt;artifact&gt;*:*&lt;/artifact&gt;
                                    &lt;excludes&gt;
                                        &lt;exclude&gt;META-INF/*.SF&lt;/exclude&gt;
                                        &lt;exclude&gt;META-INF/*.DSA&lt;/exclude&gt;
                                        &lt;exclude&gt;META-INF/*.RSA&lt;/exclude&gt;
                                    &lt;/excludes&gt;
                                &lt;/filter&gt;
                            &lt;/filters&gt;
                        &lt;/configuration&gt;
                    &lt;/execution&gt;
                &lt;/executions&gt;
            &lt;/plugin&gt;

        &lt;/plugins&gt;
    &lt;/build&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-standalone模式部署-1" tabindex="-1"><a class="header-anchor" href="#_1-4-standalone模式部署-1" aria-hidden="true">#</a> 1.4 StandAlone模式部署</h4><p>(1)启动一个YARN session(Start a long-running Flink cluster on YARN)；</p><p>配置文件 yarn-site.xml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;property&gt;
    &lt;name&gt;yarn.nodemanager.pmem-check-enabled&lt;/name&gt;
    &lt;value&gt;false&lt;/value&gt;
&lt;/property&gt;
&lt;property&gt;
    &lt;name&gt;yarn.nodemanager.vmem-check-enabled&lt;/name&gt;
    &lt;value&gt;false&lt;/value&gt;
&lt;/property&gt;
  &lt;property&gt;
    &lt;name&gt;yarn.resourcemanager.address&lt;/name&gt;
    &lt;value&gt;teacher2:8032&lt;/value&gt;
  &lt;/property&gt;
  &lt;property&gt;
    &lt;name&gt;yarn.resourcemanager.scheduler.address&lt;/name&gt;
    &lt;value&gt;teacher2:8030&lt;/value&gt;
  &lt;/property&gt;
  &lt;property&gt;
    &lt;name&gt;yarn.resourcemanager.resource-tracker.address&lt;/name&gt;
    &lt;value&gt;teacher2:8031&lt;/value&gt;
  &lt;/property&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：yarn-site的修改需要在集群的每一台机器上执行</p><p>启动hadoop （hdfs-yarn)</p><p>/export/servers/flink/bin/yarn-session.sh -n 2 -tm 800 -s 1 -d</p><p>申请2个CPU、1600M内存</p><p>bin/yarn-session.sh -n 2 -tm 800 -s 1 -d</p><p># -n 表示申请2个容器，这里指的就是多少个taskmanager</p><p># -s 表示每个TaskManager的slots数量</p><p># -tm 表示每个TaskManager的内存大小</p><p># -d 表示以后台程序方式运行</p><p>l 解释</p><p>上面的命令的意思是，同时向Yarn申请3个container</p><p>(即便只申请了两个，因为ApplicationMaster和Job Manager有一个额外的容器。一旦将Flink部署到YARN群集中，它就会显示Job Manager的连接详细信息)</p><p>2 个 Container 启动 TaskManager -n 2，每个 TaskManager 拥有1个 Task Slot -s 1，并且向每个 TaskManager 的 Container 申请 800M 的内存，以及一个ApplicationMaster--Job Manager。</p><p>如果不想让Flink YARN客户端始终运行，那么也可以启动分离的 YARN会话。该参数被称为-d或--detached。在这种情况下，Flink YARN客户端只会将Flink提交给集群，然后关闭它自己</p>`,47),v={href:"http://yarn-session.sh",target:"_blank",rel:"noopener noreferrer"},u=a("<p>- 使用Flink中的yarn-session(yarn客户端)，会启动两个必要服务JobManager和TaskManager</p><p>- 客户端通过flink run提交作业</p><p>- yarn-session会一直启动，不停地接收客户端提交的作业</p><p>- 如果有大量的小作业/任务比较小，或者工作时间短，适合使用这种方式，减少资源创建的时间.</p><p>(2)直接在YARN上提交运行Flink作业(Run a Flink job on YARN)</p><p>bin/flink run -m yarn-cluster -yn 2 -yjm 1024 -ytm 1024 /export/servers/flink/examples/batch/WordCount.jar</p><p># -m jobmanager的地址</p><p># -yn 表示TaskManager的个数</p><p>停止yarn-cluster：</p><p>yarn application -kill application_1527077715040_0003</p><p>rm -rf /tmp/.yarn-properties-root</p>",11);function o(g,m){const l=d("ExternalLinkIcon");return t(),s("div",null,[p,e("p",null,[e("a",v,[n("yarn-session.sh"),r(l)]),n("(开辟资源) + flink run(提交任务)")]),u])}const k=i(c,[["render",o],["__file","2_Flink安装与部署.html.vue"]]);export{k as default};
