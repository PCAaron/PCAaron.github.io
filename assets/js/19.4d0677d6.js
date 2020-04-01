(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{220:function(t,v,_){"use strict";_.r(v);var a=_(0),l=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"ico-智能合约的数据结构和接口设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ico-智能合约的数据结构和接口设计"}},[t._v("#")]),t._v(" ICO 智能合约的数据结构和接口设计")]),t._v(" "),_("h2",{attrs:{id:"数据结构（数据库表结构、系统中关键实体的属性）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据结构（数据库表结构、系统中关键实体的属性）"}},[t._v("#")]),t._v(" 数据结构（数据库表结构、系统中关键实体的属性）")]),t._v(" "),_("blockquote",[_("p",[t._v("智能合约管理的基本数据单元是项目，存储项目生命周期中的各种数据\n项目包含的基本属性：")])]),t._v(" "),_("ol",[_("li",[t._v("所有者，即发起项目的人，在智能合约层面指调用项目创建合约的账户，数据类型是智能合约中独有的 address 类型，后续会详细介绍")]),t._v(" "),_("li",[t._v("项目名称，项目的简单介绍，方便投资人投资前做检查，实际上如果要完整展示项目信息，需要的字段远不止这个，并且如果数据量很大，存储在以太坊上也不合适")]),t._v(" "),_("li",[t._v("资金余额，表示项目当前状态下的资金余额，如果项目没有任何支出，应该等于所有投资者投入的资金总和，数据类型为数值型，至于资金收支历史默认就存储在以太坊区块链上")]),t._v(" "),_("li",[t._v("最小投资金额，投资者投资项目的最小金额，比如项目需要的资金多，可以适当提高门槛，反之可以降低门槛")]),t._v(" "),_("li",[t._v("最大投资金额，投资者投资项目的最大金额，比如项目方从分散风险的角度，避免单个投资人投入金额过大")]),t._v(" "),_("li",[t._v("融资上限，即设定项目的融资目标，当投资者投资的累计金额达到这个目标，就不再接受新的投资")]),t._v(" "),_("li",[t._v("投资人列表，指调用智能合约投资接口转账，参与投资的账户的集合，集合元素也是 address 类型，存储该集合的目的是为了在资金支出投票时做权限检查，也方便其他投资者了解项目基本状况")]),t._v(" "),_("li",[t._v("资金支出列表，项目下所有的资金支出明细都存储在这里，列表中的每个条目会是个复杂的结构，会使用 Solidity 里面的 struct 来规范")])]),t._v(" "),_("blockquote",[_("p",[t._v("资金支出条目所含属性：")])]),t._v(" "),_("ol",[_("li",[t._v("资金用途，说明该笔资金支出的目的")]),t._v(" "),_("li",[t._v("支出金额，标明资金支出的金额")]),t._v(" "),_("li",[t._v("收款方，该笔资金要转给谁，之所以要记录，是不想然该资金经项目方的手流转到收款方，减少操作空间")]),t._v(" "),_("li",[t._v("状态，标明该笔支出是否已经完成")]),t._v(" "),_("li",[t._v("投票记录，记录所有投资人在该笔支出上的投票记录，所有投票过的投资人都会被记录下来")])]),t._v(" "),_("h2",{attrs:{id:"状态流转（和业务流程相关，即如何操作数据、数据如何变化）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#状态流转（和业务流程相关，即如何操作数据、数据如何变化）"}},[t._v("#")]),t._v(" 状态流转（和业务流程相关，即如何操作数据、数据如何变化）")]),t._v(" "),_("blockquote",[_("p",[t._v("状态流转中包含了业务流程中数据变化的各种业务规则，主要包含：")])]),t._v(" "),_("ol",[_("li",[t._v("创建项目，创建项目时需要指定项目名称，基本投资规则，自动记录项目的所有者")]),t._v(" "),_("li",[t._v("参与众筹，参与的含义是投资人选定某个项目，并向智能合约转账，智能合约会把投资人记录在投资人列表中，并更新项目的资金余额")]),t._v(" "),_("li",[t._v("创建资金支出条目，项目所有者有权限在项目上发起资金支出请求，需要提供资金用途、支出金额、收款方，默认为未完成状态，创建资金支出条目前需要检查资金余额是否充足")]),t._v(" "),_("li",[t._v("给资金支出条目投票，投资人看到新的资金支出请求之后会选择投赞成票还是反对票，投票过程需要被如实记录")]),t._v(" "),_("li",[t._v("完成资金支出，项目所有者在资金支出请求达到超过半数投资人投赞成票的条件时才有权进行此操作，操作结果是直接把对应的金额转给收款方，转账前也要进行余额检查")])]),t._v(" "),_("h2",{attrs:{id:"star-or-打赏"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#star-or-打赏"}},[t._v("#")]),t._v(" star or 打赏")]),t._v(" "),_("blockquote",[_("p",[t._v("Imtoken地址: 0x4a6Ac825993737a4f7F1ed12fcAc1b27e247c55A")])]),t._v(" "),_("blockquote",[_("p",[t._v("打赏码\n"),_("img",{attrs:{src:"/wxzz.jpg",alt:"赞助支持"}})])])])}),[],!1,null,null,null);v.default=l.exports}}]);