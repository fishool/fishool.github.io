import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as u,c as t,a as i,b as e,f as s,d as l,r as o}from"./app.5f15ca94.js";const r={},a=i("h1",{id:"第4节-特殊数据字段类型应用实战笔记",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#第4节-特殊数据字段类型应用实战笔记","aria-hidden":"true"},"#"),e(" 第4节-特殊数据字段类型应用实战笔记")],-1),v=i("h2",{id:"官网文档",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#官网文档","aria-hidden":"true"},"#"),e(" 官网文档")],-1),c={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html",target:"_blank",rel:"noopener noreferrer"},m=i("br",null,null,-1),q={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/explicit-mapping.html",target:"_blank",rel:"noopener noreferrer"},b=i("br",null,null,-1),h={href:"https://geojson.org/",target:"_blank",rel:"noopener noreferrer"},_=i("br",null,null,-1),p={href:"https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation",target:"_blank",rel:"noopener noreferrer"},g=i("br",null,null,-1),f={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/runtime.html",target:"_blank",rel:"noopener noreferrer"},y=i("br",null,null,-1),w={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/explicit-mapping.html",target:"_blank",rel:"noopener noreferrer"},x=i("br",null,null,-1),k={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-scripting.html",target:"_blank",rel:"noopener noreferrer"},E=i("h2",{id:"join-父子",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#join-父子","aria-hidden":"true"},"#"),e(" Join 父子")],-1),T=i("li",null,"join 字段类型关键字",-1),P=i("li",null,"relations 关系父子绑定关键字",-1),U=i("li",null,"routing 路由, 保证父子数据在同一分片中.",-1),j={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/parent-join.html",target:"_blank",rel:"noopener noreferrer"},D=l(`<p>查询时:</p><ul><li>parent_id 查询父文档</li><li>has_child 存在子文档</li><li>has_parent 存在父文档</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;companyName&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;join_father_child&quot;: {
        &quot;type&quot;: &quot;join&quot;,
        &quot;relations&quot;: {
          &quot;father&quot;: &quot;child&quot;
        }
      }
    }
  }
}
# 添加父数据
PUT /foolish-test-0001/_doc/1
{
  &quot;companyName&quot;: &quot;foolish_111&quot;,
  &quot;join_father_child&quot;: {
    &quot;name&quot;: &quot;father&quot;
  }
}
# 添加子数据
PUT /foolish-test-0001/_doc/2?routing=1
{
  &quot;companyName&quot;: &quot;foolish_222&quot;,
  &quot;join_father_child&quot;: {
    &quot;name&quot;: &quot;child&quot;,
    &quot;parent&quot;: &quot;1&quot;
  }
}
# 添加子数据
PUT /foolish-test-0001/_doc/3?routing=1
{
  &quot;companyName&quot;: &quot;foolish_3333&quot;,
  &quot;join_father_child&quot;: {
    &quot;name&quot;: &quot;child&quot;,
    &quot;parent&quot;: &quot;1&quot;
  }
}

# 查询父数据
GET /foolish-test-0001/_search
{
  &quot;query&quot;: {
    &quot;has_child&quot;: {
      &quot;type&quot;: &quot;child&quot;,
      &quot;query&quot;: {
        &quot;match_all&quot;: {}
      }
    }
  }
}

# 根据父节点ID查询
GET /foolish-test-0001/_search
{
  &quot;query&quot;: {
    &quot;parent_id&quot;: {
      &quot;type&quot;: &quot;child&quot;,
      &quot;id&quot;: &quot;1&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nested-嵌套键值对" tabindex="-1"><a class="header-anchor" href="#nested-嵌套键值对" aria-hidden="true">#</a> nested 嵌套键值对</h2><p>ES 支持数组类型, 但数组类型在查询时, 会将数组中的所有子元素都作为一个文档进行过滤匹配,<br> 这样会导致查询结果中, 出现一些预期之外的数据. (逻辑与 不生效等情况)</p><blockquote><p>限制参数</p></blockquote>`,6),M=i("li",null,"嵌套字段内容字段数量限制 默认50",-1),G={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/nested.html",target:"_blank",rel:"noopener noreferrer"},L=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;settings&quot;: {
    &quot;index.mapping.nested_fields.limit&quot;: 50,
    &quot;index.mapping.nested_objects.limit&quot;: 10000
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例分析" tabindex="-1"><a class="header-anchor" href="#案例分析" aria-hidden="true">#</a> 案例分析</h3><ul><li>假设一个用户, 有多个订单, 每个订单有多个商品, 每个商品有多个属性</li><li>错误的案例, 运用 array类型 (object)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;user_id&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;order&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;properties&quot;: {
          &quot;order_id&quot;: {
            &quot;type&quot;: &quot;keyword&quot;
          },
          &quot;goods&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
              &quot;goods_id&quot;: {
                &quot;type&quot;: &quot;keyword&quot;
              },
              &quot;goods_name&quot;: {
                &quot;type&quot;: &quot;keyword&quot;
              }         
             }
            }
          }
        }
      }
    }
}
# 添加数据
PUT /foolish-test-0001/_doc/1
{
  &quot;user_id&quot;: &quot;foolish_111&quot;,
  &quot;order&quot;: {
    &quot;order_id&quot;: &quot;order_111&quot;,
    &quot;goods&quot;: [{
      &quot;goods_id&quot;: &quot;goods_111&quot;,
      &quot;goods_name&quot;: &quot;goods_name_111&quot;
    },
    {
      &quot;goods_id&quot;: &quot;goods_222&quot;,
      &quot;goods_name&quot;: &quot;goods_name_222&quot;
    }]
  }
}

# 查询
GET /foolish-test-0001/_search
{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;must&quot;: [
        {
          &quot;match&quot;: {
            &quot;order.goods.goods_id&quot;: &quot;goods_111&quot;
          }
        },
        {
          &quot;match&quot;: {
            &quot;order.goods.goods_name&quot;: &quot;goods_name_111&quot;
          }
        }
      ]
    }
  }
}

# 查询商品id为 111 且 name为 222 的数据 也会被查询出来
GET /foolish-test-0001/_search
{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;must&quot;: [
        {
          &quot;match&quot;: {
            &quot;order.goods.goods_id&quot;: &quot;goods_111&quot;
          }
        },
        {
          &quot;match&quot;: {
            &quot;order.goods.goods_name&quot;: &quot;goods_name_222&quot;
          }
        }
      ]
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>正确的案例, 运用 nested类型</li><li>在查询时, 将嵌套字段的过滤条件, 放在 nested对象中, 指定 path 和 query</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;user_id&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;order&quot;: {
        &quot;type&quot;: &quot;nested&quot;,
        &quot;properties&quot;: {
          &quot;order_id&quot;: {
            &quot;type&quot;: &quot;keyword&quot;
          },
          &quot;goods&quot;: {
            &quot;type&quot;: &quot;nested&quot;,
            &quot;properties&quot;: {
              &quot;goods_id&quot;: {
                &quot;type&quot;: &quot;keyword&quot;
              },
              &quot;goods_name&quot;: {
                &quot;type&quot;: &quot;keyword&quot;
              }         
             }
            }
          }
        }
      }
    }
}
# 添加数据
PUT /foolish-test-0001/_doc/1
{
  &quot;user_id&quot;: &quot;foolish_111&quot;,
  &quot;order&quot;: {
    &quot;order_id&quot;: &quot;order_111&quot;,
    &quot;goods&quot;: [{
      &quot;goods_id&quot;: &quot;goods_111&quot;,
      &quot;goods_name&quot;: &quot;goods_name_111&quot;
    },
    {
      &quot;goods_id&quot;: &quot;goods_222&quot;,
      &quot;goods_name&quot;: &quot;goods_name_222&quot;
    }]
  }
}

# 查询
{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;must&quot;: [
        {
          &quot;nested&quot;: {
            &quot;path&quot;: &quot;order.goods&quot;,
            &quot;query&quot;: {
              &quot;bool&quot;: {
                &quot;must&quot;: [
                  {
                    &quot;match&quot;: {
                      &quot;order.goods.goods_id&quot;: &quot;goods_111&quot;
                    }
                  },
                  {
                    &quot;match&quot;: {
                      &quot;order.goods.goods_name&quot;: &quot;goods_name_111&quot;
                    }
                  }
                ]
              }
            }
          }
        }
      ]
    }
  }
}


# 查询商品id为 111 且 name为 222 的数据 就查询不到数据了
GET /foolish-test-0001/_search
{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;must&quot;: [
        {
          &quot;nested&quot;: {
            &quot;path&quot;: &quot;order.goods&quot;,
            &quot;query&quot;: {
              &quot;bool&quot;: {
                &quot;must&quot;: [
                  {
                    &quot;match&quot;: {
                      &quot;order.goods.goods_id&quot;: &quot;goods_111&quot;
                    }
                  },
                  {
                    &quot;match&quot;: {
                      &quot;order.goods.goods_name&quot;: &quot;goods_name_222&quot;
                    }
                  }
                ]
              }
            }
          }
        }
      ]
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="辅助字段类型" tabindex="-1"><a class="header-anchor" href="#辅助字段类型" aria-hidden="true">#</a> 辅助字段类型</h2><h3 id="alias-别名类型" tabindex="-1"><a class="header-anchor" href="#alias-别名类型" aria-hidden="true">#</a> alias 别名类型</h3>`,8),N=i("li",null,"alias 别名字段类型关键字",-1),I={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/alias.html",target:"_blank",rel:"noopener noreferrer"},F=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;user_id&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;area&quot;: {
        &quot;type&quot;: &quot;alias&quot;,
        &quot;path&quot;: &quot;address.area&quot;
      },
      &quot;address&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;properties&quot;: {
          &quot;province&quot;: {
            &quot;type&quot;: &quot;keyword&quot;
          },
          &quot;city&quot;: {
            &quot;type&quot;: &quot;keyword&quot;
          },
          &quot;area&quot;: {
            &quot;type&quot;: &quot;keyword&quot;
          }
        }
      }
    }
  }
}

# 添加数据
PUT /foolish-test-0001/_doc/1
{
  &quot;user_id&quot;: &quot;foolish_111&quot;,
  &quot;address&quot;: {
    &quot;province&quot;: &quot;广东省&quot;,
    &quot;city&quot;: &quot;深圳市&quot;,
    &quot;area&quot;: &quot;南山区&quot;
  }
}

# 查询
GET /foolish-test-0001/_search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;area&quot;: &quot;南山区&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fields-单值多字段" tabindex="-1"><a class="header-anchor" href="#fields-单值多字段" aria-hidden="true">#</a> fields 单值多字段</h3>`,2),R={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/multi-fields.html",target:"_blank",rel:"noopener noreferrer"},S=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;user_id&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;address&quot;: {
        &quot;type&quot;: &quot;text&quot;,
        &quot;fields&quot;: {
          &quot;keyword&quot;: {
            &quot;type&quot;: &quot;keyword&quot;
          }
        }
      }
    }
  }
}

# 添加数据
PUT /foolish-test-0001/_doc/1
{
  &quot;user_id&quot;: &quot;foolish_111&quot;,
  &quot;address&quot;: &quot;guangdong shenzhen nanshanqu&quot;
}

# text分词查询
GET /foolish-test-0001/_search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;address&quot;: &quot;shenzhen&quot;
    }
  }
}

# keword查询
GET /foolish-test-0001/_search
{
  &quot;query&quot;: {
    &quot;wildcard&quot;: {
      &quot;address.keyword&quot;: &quot;*shen*&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="copy-to-复制字段" tabindex="-1"><a class="header-anchor" href="#copy-to-复制字段" aria-hidden="true">#</a> copy_to 复制字段</h3>`,2),z=i("br",null,null,-1),V={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/copy-to.html",target:"_blank",rel:"noopener noreferrer"},B=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;user_id&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;address&quot;: {
        &quot;type&quot;: &quot;text&quot;
      },
      &quot;province&quot;: {
        &quot;type&quot;: &quot;keyword&quot;,
        &quot;copy_to&quot;: &quot;address&quot;
      },
      &quot;city&quot;: {
        &quot;type&quot;: &quot;keyword&quot;,
        &quot;copy_to&quot;: &quot;address&quot;
      },
      &quot;area&quot;: {
         &quot;type&quot;: &quot;keyword&quot;,
        &quot;copy_to&quot;: &quot;address&quot;
      }
    }
  }
}

# 添加数据
PUT /foolish-test-0001/_doc/1
{
  &quot;user_id&quot;: &quot;foolish_111&quot;,
  &quot;province&quot;: &quot;guangdong&quot;,
  &quot;city&quot;: &quot;shenzhen&quot;,
  &quot;area&quot;: &quot;nanshanqu&quot;
}

# 查询
GET /foolish-test-0001/_search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;address&quot;: &quot;shenzhen&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="特定领域字段类型" tabindex="-1"><a class="header-anchor" href="#特定领域字段类型" aria-hidden="true">#</a> 特定领域字段类型</h2><h3 id="geo-point-地理位置类型" tabindex="-1"><a class="header-anchor" href="#geo-point-地理位置类型" aria-hidden="true">#</a> geo_point 地理位置类型</h3>`,3),C=i("li",null,"geo_point 地理位置类型关键字",-1),J=i("li",null,"lat 纬度",-1),O={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/geo-point.html",target:"_blank",rel:"noopener noreferrer"},K=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;user_id&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;location&quot;: {
        &quot;type&quot;: &quot;geo_point&quot;
      }
    }
  }
}

# 添加数据
PUT /foolish-test-0001/_doc/1
{
  &quot;user_id&quot;: &quot;foolish_111&quot;,
  &quot;location&quot;: {
    &quot;lat&quot;: 22.5431,
    &quot;lon&quot;: 114.0579
  }
}

# 查询
GET /foolish-test-0001/_search
{
  &quot;query&quot;: {
    &quot;geo_bounding_box&quot;: {
      &quot;location&quot;: {
        &quot;top_left&quot;: {
          &quot;lat&quot;: 22.6431,
          &quot;lon&quot;: 113.0579
        },
        &quot;bottom_right&quot;: {
          &quot;lat&quot;: 22.4431,
          &quot;lon&quot;: 115.0579
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="geo-shape-地理图形类型" tabindex="-1"><a class="header-anchor" href="#geo-shape-地理图形类型" aria-hidden="true">#</a> geo shape 地理图形类型</h3><ul><li>geo_shape 地理位置类型关键字, 基于geohash 和 quadtree 算法</li><li>type 地理位置类型, point, linestring, polygon, multipoint, multilinestring, multipolygon, geometrycollection</li></ul>`,3),A=i("br",null,null,-1),H={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/geo-shape.html",target:"_blank",rel:"noopener noreferrer"},Q=i("h3",{id:"ip-地址类型",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#ip-地址类型","aria-hidden":"true"},"#"),e(" ip 地址类型")],-1),W=i("p",null,"网络地址 IPv4 和 IPv6",-1),X={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/ip.html",target:"_blank",rel:"noopener noreferrer"},Y=i("h3",{id:"向量类型",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#向量类型","aria-hidden":"true"},"#"),e(" 向量类型")],-1),Z=i("p",null,"应用于图片相似度, 文本相似度, 语音相似度等",-1),$={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/vector.html",target:"_blank",rel:"noopener noreferrer"},ii=i("h3",{id:"histogram-数值直方图类型",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#histogram-数值直方图类型","aria-hidden":"true"},"#"),e(" histogram 数值直方图类型")],-1),ei=i("p",null,[e("用于存储表示直方图的预聚合数值数据的字段"),i("br"),e(" histogram字段主要用于聚合。为了便于聚合访问，histogram字段数据存储为二进制文档值，而不是编制索引。")],-1),ni={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/histogram.html",target:"_blank",rel:"noopener noreferrer"},si=i("h2",{id:"runtime-运行时类型",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#runtime-运行时类型","aria-hidden":"true"},"#"),e(" Runtime 运行时类型")],-1),li=i("li",null,"Runtime 运行时类型关键字",-1),di=i("li",null,"7.11.x 版本开始支持",-1),ui=i("li",null,"可以不提前定义字段, 在查询时动态添加字段 , 不占用存储, 运行时字段可以在查询和聚合中使用",-1),ti={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/runtime.html",target:"_blank",rel:"noopener noreferrer"},oi=l(`<p>目前支持的类型(type)</p><ul><li>boolean</li><li>date</li><li>double</li><li>geo_point</li><li>ip</li><li>keyword</li><li>long</li></ul><p>script.source 为脚本内容, 语言为 painless</p><h4 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;user_id&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;salary&quot;: {
        &quot;type&quot;: &quot;long&quot;
      }
    },
    &quot;runtime&quot;: {
      &quot;salary_month&quot;: {
        &quot;type&quot;: &quot;long&quot;,
        &quot;script&quot;: {
          &quot;source&quot;: &quot;emit(doc[&#39;salary&#39;].value / 12)&quot;
        }
      }
    }
  }
}

# 添加数据
PUT /foolish-test-0001/_doc/1
{
  &quot;user_id&quot;: &quot;foolish_111&quot;,
  &quot;salary&quot;: 12000
}

PUT /foolish-test-0001/_doc/2
{
  &quot;user_id&quot;: &quot;foolish_222&quot;,
  &quot;salary&quot;: 1200
}

# 查询
GET /foolish-test-0001/_search
{
  &quot;fields&quot;: [&quot;*&quot;],
  &quot;query&quot;: {
    &quot;range&quot;: {
      &quot;salary_month&quot;: {
        &quot;gte&quot;: 800
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="源码解读" tabindex="-1"><a class="header-anchor" href="#源码解读" aria-hidden="true">#</a> 源码解读</h2><ul><li><p>MapperService</p></li><li><p>DocumentService</p></li><li><p>DocumentMapperParser</p></li><li><p>Mapper</p></li><li><p>FieldMapper</p></li><li><p>MetadataFieldMapper</p></li><li><p>RootObjectMapper</p></li><li><p>ObjectMapper</p></li><li><p>FieldMapper</p></li><li><p>KeywordFieldMapper</p></li><li><p>TextFieldMapper</p></li><li><p>NumberFieldMapper</p></li></ul>`,7);function ri(ai,vi){const n=o("ExternalLinkIcon");return u(),t("div",null,[a,v,i("p",null,[i("a",c,[e("数据字段类型"),s(n)]),m,i("a",q,[e("geo_shape"),s(n)]),b,i("a",h,[e("geo_json规范"),s(n)]),_,i("a",p,[e("IP地址规约"),s(n)]),g,i("a",f,[e("runtime 运行时类型"),s(n)]),y,i("a",w,[e("精准Mapping设置"),s(n)]),x,i("a",k,[e("脚本模块"),s(n)])]),E,i("ul",null,[T,P,U,i("li",null,[e("添加子文档时, 需要指定父文档的id, 以及父文档的routing值 "),i("a",j,[e("Join 父子"),s(n)])])]),D,i("ul",null,[M,i("li",null,[e("嵌套字段对象文档数量数量限制 默认10000 "),i("a",G,[e("嵌套字段"),s(n)])])]),L,i("ul",null,[N,i("li",null,[e("path 设置别名代理字段 "),i("a",I,[e("官方文档"),s(n)])])]),F,i("p",null,[e("ES 提供了丰富的数据类型 , 有很多特殊场景需求, 我们需要根据一个字段, 提供不同的检索需求, 在 ES 中, 我们可以通过 fields 关键字, 来实现这个需求, 原始数据只存储了一份,有效避免空间浪费 "),i("a",R,[e("官方文档"),s(n)])]),S,i("ul",null,[i("li",null,[e("copy_to 可以指定复制多个字段, 且按照顺序复制;"),z,e(" copy 的字段, 会被索引, 但是不会被存储, 也就是说, copy 的字段, 只能用于检索, 不能用于返回结果 "),i("a",V,[e("官方文档"),s(n)])])]),B,i("ul",null,[C,J,i("li",null,[e("lon 经度 "),i("a",O,[e("官方文档"),s(n)])])]),K,i("p",null,[e("不深入, 运用的时候研究官网"),A,i("a",H,[e("geo shape 地理图形类型"),s(n)])]),Q,W,i("p",null,[i("a",X,[e("ip 地址类型"),s(n)])]),Y,Z,i("p",null,[i("a",$,[e("向量类型"),s(n)])]),ii,ei,i("ul",null,[i("li",null,[e("histogram 数值直方图类型关键字 "),i("a",ni,[e("histogram 数值直方图类型"),s(n)])])]),si,i("ul",null,[li,di,ui,i("li",null,[e('"fields": ["*"] 运行时字段不会出现在 _source 中, 可以在查询时使用 fields 参数来获取运行时字段 '),i("a",ti,[e("Runtime 运行时类型"),s(n)])])]),oi])}const qi=d(r,[["render",ri],["__file","第4节-特殊数据字段类型应用实战笔记.html.vue"]]);export{qi as default};
