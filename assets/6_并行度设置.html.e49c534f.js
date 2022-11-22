import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as e,d as t}from"./app.5f15ca94.js";const l={},n=t('<h1 id="并行度设置" tabindex="-1"><a class="header-anchor" href="#并行度设置" aria-hidden="true">#</a> 并行度设置</h1><h2 id="第八部分-关于并行度的设置" tabindex="-1"><a class="header-anchor" href="#第八部分-关于并行度的设置" aria-hidden="true">#</a> 第八部分：关于并行度的设置</h2><p>一个Flink程序由多个Operator组成(source、transformation和 sink)。</p><p>一个Operator由多个并行的Task(线程)来执行， 一个Operator的并行Task(线程)数目就被称为该Operator(任务)的并行度(Parallel)</p><p>l 并行度可以有如下几种指定方式</p><p>1.Operator Level（算子级别）(可以使用)</p><p>一个算子、数据源和sink的并行度可以通过调用 setParallelism()方法来指定</p><p><img src="https://81.71.83.25/bucket/image-20200921112057156.png" alt="image-20200921112057156" loading="lazy"></p><p>2.Execution Environment Level（Env级别）(可以使用)</p><p>执行环境(任务)的默认并行度可以通过调用setParallelism()方法指定。为了以并行度3来执行所有的算子、数据源和data sink， 可以通过如下的方式设置执行环境的并行度：</p><p>执行环境的并行度可以通过显式设置算子的并行度而被重写</p><p><img src="https://81.71.83.25/bucket/image-20200921112112743.png" alt="image-20200921112112743" loading="lazy"></p><p>3.Client Level(客户端级别,推荐使用)(可以使用)</p><p>并行度可以在客户端将job提交到Flink时设定。</p><p>对于CLI客户端，可以通过-p参数指定并行度</p><p>./bin/flink run -p 10 WordCount-java.jar</p><p>4.System Level（系统默认级别,尽量不使用）</p><p>在系统级可以通过设置flink-conf.yaml文件中的parallelism.default属性来指定所有执行环境的默认并行度</p><p>l 示例</p><p><img src="https://81.71.83.25/bucket/image-20200921112124816.png" alt="image-20200921112124816" loading="lazy"></p><p><img src="https://81.71.83.25/bucket/image-20200921112136826.png" alt="image-20200921112136826" loading="lazy"></p><p>Example1</p><p>在fink-conf.yaml中 taskmanager.numberOfTaskSlots 默认值为1，即每个Task Manager上只有一个Slot ，此处是3</p><p>Example1中，WordCount程序设置了并行度为1，意味着程序 Source、Reduce、Sink在一个Slot中，占用一个Slot</p><p>Example2</p><p>通过设置并行度为2后，将占用2个Slot</p><p>Example3</p><p>通过设置并行度为9，将占用9个Slot</p><p>Example4</p><p>通过设置并行度为9，并且设置sink的并行度为1，则Source、Reduce将占用9个Slot，但是Sink只占用1个Slot</p><p>l 注意</p><p>1.并行度的优先级：算子级别 &gt; env级别 &gt; Client级别 &gt; 系统默认级别 (越靠前具体的代码并行度的优先级越高)</p><p>2.如果source不可以被并行执行，即使指定了并行度为多个，也不会生效</p><p>3.尽可能的规避算子的并行度的设置，因为并行度的改变会造成task的重新划分，带来shuffle问题，</p><p>4.推荐使用任务提交的时候动态的指定并行度</p><p>5.slot是静态的概念，是指taskmanager具有的并发执行能力; parallelism是动态的概念，是指程序运行时实际使用的并发能力</p>',36),r=[n];function i(o,s){return a(),e("div",null,r)}const d=p(l,[["render",i],["__file","6_并行度设置.html.vue"]]);export{d as default};
