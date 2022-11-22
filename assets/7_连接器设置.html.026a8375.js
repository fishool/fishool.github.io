import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as o,a as t,b as n,f as l,d as s,r}from"./app.5f15ca94.js";const c={},p=s(`<h1 id="连接器设置" tabindex="-1"><a class="header-anchor" href="#连接器设置" aria-hidden="true">#</a> 连接器设置</h1><h2 id="flink-kafka-connector" tabindex="-1"><a class="header-anchor" href="#flink-kafka-connector" aria-hidden="true">#</a> Flink-Kafka-Connector</h2><h3 id="第一节-源码理解" tabindex="-1"><a class="header-anchor" href="#第一节-源码理解" aria-hidden="true">#</a> 第一节：源码理解</h3><p>Flink-Kafka-Consumer:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lagou<span class="token punctuation">.</span>source</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>flink<span class="token punctuation">.</span>api<span class="token punctuation">.</span>common<span class="token punctuation">.</span>serialization<span class="token punctuation">.</span></span><span class="token class-name">SimpleStringSchema</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>flink<span class="token punctuation">.</span>streaming<span class="token punctuation">.</span>api<span class="token punctuation">.</span>datastream<span class="token punctuation">.</span></span><span class="token class-name">DataStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>flink<span class="token punctuation">.</span>streaming<span class="token punctuation">.</span>api<span class="token punctuation">.</span>environment<span class="token punctuation">.</span></span><span class="token class-name">StreamExecutionEnvironment</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>flink<span class="token punctuation">.</span>streaming<span class="token punctuation">.</span>connectors<span class="token punctuation">.</span>kafka<span class="token punctuation">.</span></span><span class="token class-name">FlinkKafkaConsumer</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Properties</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FromKafka</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
            <span class="token class-name">StreamExecutionEnvironment</span> env <span class="token operator">=</span> <span class="token class-name">StreamExecutionEnvironment</span><span class="token punctuation">.</span><span class="token function">getExecutionEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;bootstrap.servers&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;teacher2:9092&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">FlinkKafkaConsumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> consumer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FlinkKafkaConsumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;mytopic&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">SimpleStringSchema</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> properties<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//从最早开始消费</span>
            consumer<span class="token punctuation">.</span><span class="token function">setStartFromEarliest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">DataStream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> stream <span class="token operator">=</span> env<span class="token punctuation">.</span><span class="token function">addSource</span><span class="token punctuation">(</span>consumer<span class="token punctuation">)</span><span class="token punctuation">;</span>
            stream<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//stream.map();</span>
            env<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>flink-kafka 是如何消费的？以及如何分区分配等</p><p>open方法源码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Override
	public void open(Configuration configuration) throws Exception {
		// determine the offset commit mode 
		// 指定offset的提交模式：   DISABLED、 ON_CHECKPOINTS 、KAFKA_PERIODIC
		this.offsetCommitMode = OffsetCommitModes.fromConfiguration(
				getIsAutoCommitEnabled(),
				enableCommitOnCheckpoints,
				((StreamingRuntimeContext) getRuntimeContext()).isCheckpointingEnabled());

		// create the partition discoverer
		//  创建一个分区发现器
		this.partitionDiscoverer = createPartitionDiscoverer(
				topicsDescriptor,
				getRuntimeContext().getIndexOfThisSubtask(),
				getRuntimeContext().getNumberOfParallelSubtasks());
		// 实例化出 consumer对象
		this.partitionDiscoverer.open();

		// 已经订阅的分区列表
		subscribedPartitionsToStartOffsets = new HashMap&lt;&gt;();
		// 获取kafka中的所有分区
		final List&lt;KafkaTopicPartition&gt; allPartitions = partitionDiscoverer.discoverPartitions();
		if (restoredState != null) {
			//restoredState: 快照  consumer是从快照中恢复的方式创建
			for (KafkaTopicPartition partition : allPartitions) {
				if (!restoredState.containsKey(partition)) {
					restoredState.put(partition, KafkaTopicPartitionStateSentinel.EARLIEST_OFFSET);
				}
			}

			for (Map.Entry&lt;KafkaTopicPartition, Long&gt; restoredStateEntry : restoredState.entrySet()) {
				if (!restoredFromOldState) {
					// seed the partition discoverer with the union state while filtering out
					// restored partitions that should not be subscribed by this subtask
					// 过滤一下和当前的subTask没有关系的分区数据
					if (KafkaTopicPartitionAssigner.assign(
						restoredStateEntry.getKey(), getRuntimeContext().getNumberOfParallelSubtasks())
						== getRuntimeContext().getIndexOfThisSubtask()){
						subscribedPartitionsToStartOffsets.put(restoredStateEntry.getKey(), restoredStateEntry.getValue());
					}
				} else {
					// when restoring from older 1.1 / 1.2 state, the restored state would not be the union state;
					// in this case, just use the restored state as the subscribed partitions
					subscribedPartitionsToStartOffsets.put(restoredStateEntry.getKey(), restoredStateEntry.getValue());
				}
			}

			LOG.info(&quot;Consumer subtask {} will start reading {} partitions with offsets in restored state: {}&quot;,
				getRuntimeContext().getIndexOfThisSubtask(), subscribedPartitionsToStartOffsets.size(), subscribedPartitionsToStartOffsets);
		} else {
			//重新创建一个新的consumer
			// use the partition discoverer to fetch the initial seed partitions,
			// and set their initial offsets depending on the startup mode.
			// for SPECIFIC_OFFSETS and TIMESTAMP modes, we set the specific offsets now;
			// for other modes (EARLIEST, LATEST, and GROUP_OFFSETS), the offset is lazily determined
			// when the partition is actually read.
			switch (startupMode) {
			//startupMode : consumer的消费策略
				case SPECIFIC_OFFSETS:
					if (specificStartupOffsets == null) {
						throw new IllegalStateException(
							&quot;Startup mode for the consumer set to &quot; + StartupMode.SPECIFIC_OFFSETS +
								&quot;, but no specific offsets were specified.&quot;);
					}

					for (KafkaTopicPartition seedPartition : allPartitions) {
						Long specificOffset = specificStartupOffsets.get(seedPartition);
						if (specificOffset != null) {
							// since the specified offsets represent the next record to read, we subtract
							// it by one so that the initial state of the consumer will be correct
							subscribedPartitionsToStartOffsets.put(seedPartition, specificOffset - 1);
						} else {
							// default to group offset behaviour if the user-provided specific offsets
							// do not contain a value for this partition
							subscribedPartitionsToStartOffsets.put(seedPartition, KafkaTopicPartitionStateSentinel.GROUP_OFFSET);
						}
					}

					break;
				case TIMESTAMP:
					if (startupOffsetsTimestamp == null) {
						throw new IllegalStateException(
							&quot;Startup mode for the consumer set to &quot; + StartupMode.TIMESTAMP +
								&quot;, but no startup timestamp was specified.&quot;);
					}

					for (Map.Entry&lt;KafkaTopicPartition, Long&gt; partitionToOffset
						: fetchOffsetsWithTimestamp(allPartitions, startupOffsetsTimestamp).entrySet()) {
						subscribedPartitionsToStartOffsets.put(
							partitionToOffset.getKey(),
							(partitionToOffset.getValue() == null)
								// if an offset cannot be retrieved for a partition with the given timestamp,
								// we default to using the latest offset for the partition
								? KafkaTopicPartitionStateSentinel.LATEST_OFFSET
								// since the specified offsets represent the next record to read, we subtract
								// it by one so that the initial state of the consumer will be correct
								: partitionToOffset.getValue() - 1);
					}

					break;
				default:
					for (KafkaTopicPartition seedPartition : allPartitions) {
						subscribedPartitionsToStartOffsets.put(seedPartition, startupMode.getStateSentinel());
					}
			}

			if (!subscribedPartitionsToStartOffsets.isEmpty()) {
				switch (startupMode) {
					case EARLIEST:
						LOG.info(&quot;Consumer subtask {} will start reading the following {} partitions from the earliest offsets: {}&quot;,
							getRuntimeContext().getIndexOfThisSubtask(),
							subscribedPartitionsToStartOffsets.size(),
							subscribedPartitionsToStartOffsets.keySet());
						break;
					case LATEST:
						LOG.info(&quot;Consumer subtask {} will start reading the following {} partitions from the latest offsets: {}&quot;,
							getRuntimeContext().getIndexOfThisSubtask(),
							subscribedPartitionsToStartOffsets.size(),
							subscribedPartitionsToStartOffsets.keySet());
						break;
					case TIMESTAMP:
						LOG.info(&quot;Consumer subtask {} will start reading the following {} partitions from timestamp {}: {}&quot;,
							getRuntimeContext().getIndexOfThisSubtask(),
							subscribedPartitionsToStartOffsets.size(),
							startupOffsetsTimestamp,
							subscribedPartitionsToStartOffsets.keySet());
						break;
					case SPECIFIC_OFFSETS:
						LOG.info(&quot;Consumer subtask {} will start reading the following {} partitions from the specified startup offsets {}: {}&quot;,
							getRuntimeContext().getIndexOfThisSubtask(),
							subscribedPartitionsToStartOffsets.size(),
							specificStartupOffsets,
							subscribedPartitionsToStartOffsets.keySet());

						List&lt;KafkaTopicPartition&gt; partitionsDefaultedToGroupOffsets = new ArrayList&lt;&gt;(subscribedPartitionsToStartOffsets.size());
						for (Map.Entry&lt;KafkaTopicPartition, Long&gt; subscribedPartition : subscribedPartitionsToStartOffsets.entrySet()) {
							if (subscribedPartition.getValue() == KafkaTopicPartitionStateSentinel.GROUP_OFFSET) {
								partitionsDefaultedToGroupOffsets.add(subscribedPartition.getKey());
							}
						}

						if (partitionsDefaultedToGroupOffsets.size() &gt; 0) {
							LOG.warn(&quot;Consumer subtask {} cannot find offsets for the following {} partitions in the specified startup offsets: {}&quot; +
									&quot;; their startup offsets will be defaulted to their committed group offsets in Kafka.&quot;,
								getRuntimeContext().getIndexOfThisSubtask(),
								partitionsDefaultedToGroupOffsets.size(),
								partitionsDefaultedToGroupOffsets);
						}
						break;
					case GROUP_OFFSETS:
						LOG.info(&quot;Consumer subtask {} will start reading the following {} partitions from the committed group offsets in Kafka: {}&quot;,
							getRuntimeContext().getIndexOfThisSubtask(),
							subscribedPartitionsToStartOffsets.size(),
							subscribedPartitionsToStartOffsets.keySet());
				}
			} else {
				LOG.info(&quot;Consumer subtask {} initially has no partitions to read from.&quot;,
					getRuntimeContext().getIndexOfThisSubtask());
			}
		}
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该方法包含的内容为<code>FlinkKafkaConsumer</code>的初始化逻辑。</p><p>首先设置提交offset的模式。</p><p>接下来创建和启动分区发现工具。</p><p><code>subscribedPartitionsToStartOffsets</code> 为已订阅的分区列表，这里将它初始化。</p><p>run:</p>`,13),u={href:"http://kafka-console-producer.sh",target:"_blank",rel:"noopener noreferrer"},d=s(`<h3 id="_1-1-消费策略" tabindex="-1"><a class="header-anchor" href="#_1-1-消费策略" aria-hidden="true">#</a> 1.1 消费策略</h3><ul><li><p>setStartFromGroupOffsets()【默认消费策略】</p><p>默认读取上次保存的offset信息 如果是应用第一次启动，读取不到上次的offset信息，则会根据这个参数auto.offset.reset的值来进行消费数据</p></li><li><p>setStartFromEarliest() 从最早的数据开始进行消费，忽略存储的offset信息</p></li><li><p>setStartFromLatest() 从最新的数据进行消费，忽略存储的offset信息</p></li><li><p>setStartFromSpecificOffsets(Map&lt;KafkaTopicPartition, Long&gt;) 从指定位置进行消费</p></li><li><p>当checkpoint机制开启的时候，KafkaConsumer会定期把kafka的offset信息还有其他operator的状态信息一块保存起来。当job失败重启的时候，Flink会从最近一次的checkpoint中进行恢复数据，重新消费kafka中的数据。</p></li><li><p>为了能够使用支持容错的kafka Consumer，需要开启checkpoint env.enableCheckpointing(5000); // 每5s checkpoint一次</p></li></ul><p>1.2 Kafka consumer offset自动提交：</p><p>kafka consumer offset自动提交的配置需要根据job是否开启checkpoint来区分</p><p>checkpoint关闭时：</p><p>checkpoint开启时:</p><p>如果启用了checkpoint，并且启用了checkpoint完成时提交offset，返回ON_CHECKPOINTS。</p><p>如果未启用checkpoint，但是启用了自动提交，返回KAFKA_PERIODIC。</p><p>其他情况都返回DISABLED。</p><p><code>OffsetCommitMode</code>是一个枚举类型，具有如下三个值：</p><ul><li>DISABLED：完全禁用offset提交。</li><li>ON_CHECKPOINTS：当checkpoint完成的时候再提交offset。</li><li>KAFKA_PERIODIC：周期性提交offset。</li></ul><p><strong>Flink kafka Producer</strong></p><p>nc</p><p>代码接受nc</p><p>把接收到的nc的数据，给到kafka flink kafka producer</p><p>代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package com.lagou.sink;

import org.apache.flink.api.common.serialization.SimpleStringSchema;
import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.streaming.connectors.kafka.FlinkKafkaProducer;

import java.util.Properties;

public class SinkToKafka {
    public static void main(String[] args) throws Exception {
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        DataStreamSource&lt;String&gt; data = env.socketTextStream(&quot;teacher2&quot;, 7777);
        Properties properties = new Properties();
        properties.setProperty(&quot;bootstrap.servers&quot;,&quot;teacher2:9092&quot;);
        FlinkKafkaProducer producer = new FlinkKafkaProducer(&quot;teacher2:9092&quot;, &quot;mytopic2&quot;, new SimpleStringSchema());
        data.addSink(producer);
        env.execute();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function v(m,f){const e=r("ExternalLinkIcon");return i(),o("div",null,[p,t("p",null,[t("a",u,[n("kafka-console-producer.sh"),l(e)]),n(" --broker-list teacher2:9092 --topic mytopic")]),d])}const S=a(c,[["render",v],["__file","7_连接器设置.html.vue"]]);export{S as default};
