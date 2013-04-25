



<!DOCTYPE html>
<html>
<head>
 <link rel="icon" type="image/vnd.microsoft.icon" href="http://www.gstatic.com/codesite/ph/images/phosting.ico">
 
 <script type="text/javascript">
 
 
 
 var codesite_token = "80719b2177d660277db0aa3ee0318eae";
 
 
 var logged_in_user_email = "lescaph@googlemail.com";
 
 
 var relative_base_url = "";
 
 </script>
 
 
 <title>ui.draggable.js - 
 jquery-ui -
 
 Project Hosting on Google Code</title>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/3799605220899551948/css/ph_core.css">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/3799605220899551948/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/3799605220899551948/css/d_sb_20080522.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/3799605220899551948/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
 .edit_icon {
 width: 14px;
 height: 14px;
 padding-right: 4px;
 }
 
.list {
 border: 1px solid white;
 margin-bottom:0;
}

 </style>
</head>
<body class="t4">
 <script type="text/javascript">
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 _gaq.push(
 ['projectTracker._setAccount', 'UA-2427667-2'],
 ['projectTracker._trackPageview']);
 
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
 </script>
<div class="headbg">
 <div id="gaia">
 
 <span>
 
 
 <b>lescaph@gmail.com</b>
 
 
 | <a href="/u/@UhVVQFBYABdGWgl0/" id="projects-dropdown" onclick="return false;"
 ><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="/u/@UhVVQFBYABdGWgl0/" onclick="_CS_click('/gb/ph/profile');" 
 title="Profile, Updates, and Settings"
 ><u>Profile</u></a>
 | <a href="https://www.google.com/accounts/Logout?continue=http%3A%2F%2Fcode.google.com%2Fp%2Fjquery-ui%2Fsource%2Fbrowse%2Fbranches%2Fdev%2Fwidget-factory%2Fui%2Fui.draggable.js%3Fr%3D2402" 
 onclick="_CS_click('/gb/ph/signout');"
 ><u>Sign out</u></a>
 
 </span>

 </div>
 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->




 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0">
 <tr style="height: 58px;">
 
 <td id="plogo">
 <a href="/p/jquery-ui/">
 
 <img src="http://www.gstatic.com/codesite/ph/images/defaultlogo.png" alt="Logo">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/p/jquery-ui/">jquery-ui</a>
 </div>
 <div id="psum">
 <a id="project_summary_link" href="/p/jquery-ui/" >The official jQuery User Interface framework</a>
 
 </div>
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="" type="text">
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/p/jquery-ui/" class="tab ">Project&nbsp;Home</a> 
 
 
 
 
 <a href="/p/jquery-ui/downloads/list" class="tab ">Downloads</a>
 
 
 
 
 
 
 
 
 
 <a href="/p/jquery-ui/source/checkout"
 class="tab active">Source</a>
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 
 
 <span class="inst1"><a href="/p/jquery-ui/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/p/jquery-ui/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/p/jquery-ui/source/list">Changes</a></span> &nbsp;
 
 <form action="http://www.google.com/codesearch" method="get" style="display:inline"
 onsubmit="document.getElementById('codesearchq').value = document.getElementById('origq').value + ' package:http://jquery-ui\\.googlecode\\.com'">
 <input type="hidden" name="q" id="codesearchq" value="">
 <input type="text" maxlength="2048" size="38" id="origq" name="origq" value="" title="Google Code Search" style="font-size:92%">&nbsp;<input type="submit" value="Search Trunk" name="btnG" style="font-size:92%">
 
 </form>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>
<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>


<div id="maincol"
 
>

 
<!-- IE -->




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/jquery-ui/source/browse/?r=2402">svn</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/p/jquery-ui/source/browse/branches/?r=2402">branches</a><span class="sp">/&nbsp;</span><a href="/p/jquery-ui/source/browse/branches/dev/?r=2402">dev</a><span class="sp">/&nbsp;</span><a href="/p/jquery-ui/source/browse/branches/dev/widget-factory/?r=2402">widget-factory</a><span class="sp">/&nbsp;</span><a href="/p/jquery-ui/source/browse/branches/dev/widget-factory/ui/?r=2402">ui</a><span class="sp">/&nbsp;</span>ui.draggable.js</span>
 
 

 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper">
 <ul class="leftside">
 
 <li><a href="/p/jquery-ui/source/browse/branches/dev/widget-factory/ui/ui.draggable.js?r=2398" title="Previous">&lsaquo;r2398</a></li>
 
 </ul>
 </td>
 
 <td class="flipper"><b>r2402</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(http://www.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn2402_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn2402_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn2402_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn2402_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn2402_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn2402_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn2402_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn2402_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn2402_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn2402_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn2402_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn2402_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn2402_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn2402_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn2402_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn2402_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn2402_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn2402_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn2402_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn2402_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn2402_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn2402_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn2402_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn2402_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn2402_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn2402_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn2402_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn2402_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn2402_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn2402_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn2402_31"

><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn2402_32"

><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn2402_33"

><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn2402_34"

><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn2402_35"

><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn2402_36"

><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn2402_37"

><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn2402_38"

><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svn2402_39"

><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svn2402_40"

><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svn2402_41"

><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svn2402_42"

><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svn2402_43"

><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svn2402_44"

><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svn2402_45"

><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svn2402_46"

><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svn2402_47"

><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svn2402_48"

><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svn2402_49"

><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svn2402_50"

><td id="50"><a href="#50">50</a></td></tr
><tr id="gr_svn2402_51"

><td id="51"><a href="#51">51</a></td></tr
><tr id="gr_svn2402_52"

><td id="52"><a href="#52">52</a></td></tr
><tr id="gr_svn2402_53"

><td id="53"><a href="#53">53</a></td></tr
><tr id="gr_svn2402_54"

><td id="54"><a href="#54">54</a></td></tr
><tr id="gr_svn2402_55"

><td id="55"><a href="#55">55</a></td></tr
><tr id="gr_svn2402_56"

><td id="56"><a href="#56">56</a></td></tr
><tr id="gr_svn2402_57"

><td id="57"><a href="#57">57</a></td></tr
><tr id="gr_svn2402_58"

><td id="58"><a href="#58">58</a></td></tr
><tr id="gr_svn2402_59"

><td id="59"><a href="#59">59</a></td></tr
><tr id="gr_svn2402_60"

><td id="60"><a href="#60">60</a></td></tr
><tr id="gr_svn2402_61"

><td id="61"><a href="#61">61</a></td></tr
><tr id="gr_svn2402_62"

><td id="62"><a href="#62">62</a></td></tr
><tr id="gr_svn2402_63"

><td id="63"><a href="#63">63</a></td></tr
><tr id="gr_svn2402_64"

><td id="64"><a href="#64">64</a></td></tr
><tr id="gr_svn2402_65"

><td id="65"><a href="#65">65</a></td></tr
><tr id="gr_svn2402_66"

><td id="66"><a href="#66">66</a></td></tr
><tr id="gr_svn2402_67"

><td id="67"><a href="#67">67</a></td></tr
><tr id="gr_svn2402_68"

><td id="68"><a href="#68">68</a></td></tr
><tr id="gr_svn2402_69"

><td id="69"><a href="#69">69</a></td></tr
><tr id="gr_svn2402_70"

><td id="70"><a href="#70">70</a></td></tr
><tr id="gr_svn2402_71"

><td id="71"><a href="#71">71</a></td></tr
><tr id="gr_svn2402_72"

><td id="72"><a href="#72">72</a></td></tr
><tr id="gr_svn2402_73"

><td id="73"><a href="#73">73</a></td></tr
><tr id="gr_svn2402_74"

><td id="74"><a href="#74">74</a></td></tr
><tr id="gr_svn2402_75"

><td id="75"><a href="#75">75</a></td></tr
><tr id="gr_svn2402_76"

><td id="76"><a href="#76">76</a></td></tr
><tr id="gr_svn2402_77"

><td id="77"><a href="#77">77</a></td></tr
><tr id="gr_svn2402_78"

><td id="78"><a href="#78">78</a></td></tr
><tr id="gr_svn2402_79"

><td id="79"><a href="#79">79</a></td></tr
><tr id="gr_svn2402_80"

><td id="80"><a href="#80">80</a></td></tr
><tr id="gr_svn2402_81"

><td id="81"><a href="#81">81</a></td></tr
><tr id="gr_svn2402_82"

><td id="82"><a href="#82">82</a></td></tr
><tr id="gr_svn2402_83"

><td id="83"><a href="#83">83</a></td></tr
><tr id="gr_svn2402_84"

><td id="84"><a href="#84">84</a></td></tr
><tr id="gr_svn2402_85"

><td id="85"><a href="#85">85</a></td></tr
><tr id="gr_svn2402_86"

><td id="86"><a href="#86">86</a></td></tr
><tr id="gr_svn2402_87"

><td id="87"><a href="#87">87</a></td></tr
><tr id="gr_svn2402_88"

><td id="88"><a href="#88">88</a></td></tr
><tr id="gr_svn2402_89"

><td id="89"><a href="#89">89</a></td></tr
><tr id="gr_svn2402_90"

><td id="90"><a href="#90">90</a></td></tr
><tr id="gr_svn2402_91"

><td id="91"><a href="#91">91</a></td></tr
><tr id="gr_svn2402_92"

><td id="92"><a href="#92">92</a></td></tr
><tr id="gr_svn2402_93"

><td id="93"><a href="#93">93</a></td></tr
><tr id="gr_svn2402_94"

><td id="94"><a href="#94">94</a></td></tr
><tr id="gr_svn2402_95"

><td id="95"><a href="#95">95</a></td></tr
><tr id="gr_svn2402_96"

><td id="96"><a href="#96">96</a></td></tr
><tr id="gr_svn2402_97"

><td id="97"><a href="#97">97</a></td></tr
><tr id="gr_svn2402_98"

><td id="98"><a href="#98">98</a></td></tr
><tr id="gr_svn2402_99"

><td id="99"><a href="#99">99</a></td></tr
><tr id="gr_svn2402_100"

><td id="100"><a href="#100">100</a></td></tr
><tr id="gr_svn2402_101"

><td id="101"><a href="#101">101</a></td></tr
><tr id="gr_svn2402_102"

><td id="102"><a href="#102">102</a></td></tr
><tr id="gr_svn2402_103"

><td id="103"><a href="#103">103</a></td></tr
><tr id="gr_svn2402_104"

><td id="104"><a href="#104">104</a></td></tr
><tr id="gr_svn2402_105"

><td id="105"><a href="#105">105</a></td></tr
><tr id="gr_svn2402_106"

><td id="106"><a href="#106">106</a></td></tr
><tr id="gr_svn2402_107"

><td id="107"><a href="#107">107</a></td></tr
><tr id="gr_svn2402_108"

><td id="108"><a href="#108">108</a></td></tr
><tr id="gr_svn2402_109"

><td id="109"><a href="#109">109</a></td></tr
><tr id="gr_svn2402_110"

><td id="110"><a href="#110">110</a></td></tr
><tr id="gr_svn2402_111"

><td id="111"><a href="#111">111</a></td></tr
><tr id="gr_svn2402_112"

><td id="112"><a href="#112">112</a></td></tr
><tr id="gr_svn2402_113"

><td id="113"><a href="#113">113</a></td></tr
><tr id="gr_svn2402_114"

><td id="114"><a href="#114">114</a></td></tr
><tr id="gr_svn2402_115"

><td id="115"><a href="#115">115</a></td></tr
><tr id="gr_svn2402_116"

><td id="116"><a href="#116">116</a></td></tr
><tr id="gr_svn2402_117"

><td id="117"><a href="#117">117</a></td></tr
><tr id="gr_svn2402_118"

><td id="118"><a href="#118">118</a></td></tr
><tr id="gr_svn2402_119"

><td id="119"><a href="#119">119</a></td></tr
><tr id="gr_svn2402_120"

><td id="120"><a href="#120">120</a></td></tr
><tr id="gr_svn2402_121"

><td id="121"><a href="#121">121</a></td></tr
><tr id="gr_svn2402_122"

><td id="122"><a href="#122">122</a></td></tr
><tr id="gr_svn2402_123"

><td id="123"><a href="#123">123</a></td></tr
><tr id="gr_svn2402_124"

><td id="124"><a href="#124">124</a></td></tr
><tr id="gr_svn2402_125"

><td id="125"><a href="#125">125</a></td></tr
><tr id="gr_svn2402_126"

><td id="126"><a href="#126">126</a></td></tr
><tr id="gr_svn2402_127"

><td id="127"><a href="#127">127</a></td></tr
><tr id="gr_svn2402_128"

><td id="128"><a href="#128">128</a></td></tr
><tr id="gr_svn2402_129"

><td id="129"><a href="#129">129</a></td></tr
><tr id="gr_svn2402_130"

><td id="130"><a href="#130">130</a></td></tr
><tr id="gr_svn2402_131"

><td id="131"><a href="#131">131</a></td></tr
><tr id="gr_svn2402_132"

><td id="132"><a href="#132">132</a></td></tr
><tr id="gr_svn2402_133"

><td id="133"><a href="#133">133</a></td></tr
><tr id="gr_svn2402_134"

><td id="134"><a href="#134">134</a></td></tr
><tr id="gr_svn2402_135"

><td id="135"><a href="#135">135</a></td></tr
><tr id="gr_svn2402_136"

><td id="136"><a href="#136">136</a></td></tr
><tr id="gr_svn2402_137"

><td id="137"><a href="#137">137</a></td></tr
><tr id="gr_svn2402_138"

><td id="138"><a href="#138">138</a></td></tr
><tr id="gr_svn2402_139"

><td id="139"><a href="#139">139</a></td></tr
><tr id="gr_svn2402_140"

><td id="140"><a href="#140">140</a></td></tr
><tr id="gr_svn2402_141"

><td id="141"><a href="#141">141</a></td></tr
><tr id="gr_svn2402_142"

><td id="142"><a href="#142">142</a></td></tr
><tr id="gr_svn2402_143"

><td id="143"><a href="#143">143</a></td></tr
><tr id="gr_svn2402_144"

><td id="144"><a href="#144">144</a></td></tr
><tr id="gr_svn2402_145"

><td id="145"><a href="#145">145</a></td></tr
><tr id="gr_svn2402_146"

><td id="146"><a href="#146">146</a></td></tr
><tr id="gr_svn2402_147"

><td id="147"><a href="#147">147</a></td></tr
><tr id="gr_svn2402_148"

><td id="148"><a href="#148">148</a></td></tr
><tr id="gr_svn2402_149"

><td id="149"><a href="#149">149</a></td></tr
><tr id="gr_svn2402_150"

><td id="150"><a href="#150">150</a></td></tr
><tr id="gr_svn2402_151"

><td id="151"><a href="#151">151</a></td></tr
><tr id="gr_svn2402_152"

><td id="152"><a href="#152">152</a></td></tr
><tr id="gr_svn2402_153"

><td id="153"><a href="#153">153</a></td></tr
><tr id="gr_svn2402_154"

><td id="154"><a href="#154">154</a></td></tr
><tr id="gr_svn2402_155"

><td id="155"><a href="#155">155</a></td></tr
><tr id="gr_svn2402_156"

><td id="156"><a href="#156">156</a></td></tr
><tr id="gr_svn2402_157"

><td id="157"><a href="#157">157</a></td></tr
><tr id="gr_svn2402_158"

><td id="158"><a href="#158">158</a></td></tr
><tr id="gr_svn2402_159"

><td id="159"><a href="#159">159</a></td></tr
><tr id="gr_svn2402_160"

><td id="160"><a href="#160">160</a></td></tr
><tr id="gr_svn2402_161"

><td id="161"><a href="#161">161</a></td></tr
><tr id="gr_svn2402_162"

><td id="162"><a href="#162">162</a></td></tr
><tr id="gr_svn2402_163"

><td id="163"><a href="#163">163</a></td></tr
><tr id="gr_svn2402_164"

><td id="164"><a href="#164">164</a></td></tr
><tr id="gr_svn2402_165"

><td id="165"><a href="#165">165</a></td></tr
><tr id="gr_svn2402_166"

><td id="166"><a href="#166">166</a></td></tr
><tr id="gr_svn2402_167"

><td id="167"><a href="#167">167</a></td></tr
><tr id="gr_svn2402_168"

><td id="168"><a href="#168">168</a></td></tr
><tr id="gr_svn2402_169"

><td id="169"><a href="#169">169</a></td></tr
><tr id="gr_svn2402_170"

><td id="170"><a href="#170">170</a></td></tr
><tr id="gr_svn2402_171"

><td id="171"><a href="#171">171</a></td></tr
><tr id="gr_svn2402_172"

><td id="172"><a href="#172">172</a></td></tr
><tr id="gr_svn2402_173"

><td id="173"><a href="#173">173</a></td></tr
><tr id="gr_svn2402_174"

><td id="174"><a href="#174">174</a></td></tr
><tr id="gr_svn2402_175"

><td id="175"><a href="#175">175</a></td></tr
><tr id="gr_svn2402_176"

><td id="176"><a href="#176">176</a></td></tr
><tr id="gr_svn2402_177"

><td id="177"><a href="#177">177</a></td></tr
><tr id="gr_svn2402_178"

><td id="178"><a href="#178">178</a></td></tr
><tr id="gr_svn2402_179"

><td id="179"><a href="#179">179</a></td></tr
><tr id="gr_svn2402_180"

><td id="180"><a href="#180">180</a></td></tr
><tr id="gr_svn2402_181"

><td id="181"><a href="#181">181</a></td></tr
><tr id="gr_svn2402_182"

><td id="182"><a href="#182">182</a></td></tr
><tr id="gr_svn2402_183"

><td id="183"><a href="#183">183</a></td></tr
><tr id="gr_svn2402_184"

><td id="184"><a href="#184">184</a></td></tr
><tr id="gr_svn2402_185"

><td id="185"><a href="#185">185</a></td></tr
><tr id="gr_svn2402_186"

><td id="186"><a href="#186">186</a></td></tr
><tr id="gr_svn2402_187"

><td id="187"><a href="#187">187</a></td></tr
><tr id="gr_svn2402_188"

><td id="188"><a href="#188">188</a></td></tr
><tr id="gr_svn2402_189"

><td id="189"><a href="#189">189</a></td></tr
><tr id="gr_svn2402_190"

><td id="190"><a href="#190">190</a></td></tr
><tr id="gr_svn2402_191"

><td id="191"><a href="#191">191</a></td></tr
><tr id="gr_svn2402_192"

><td id="192"><a href="#192">192</a></td></tr
><tr id="gr_svn2402_193"

><td id="193"><a href="#193">193</a></td></tr
><tr id="gr_svn2402_194"

><td id="194"><a href="#194">194</a></td></tr
><tr id="gr_svn2402_195"

><td id="195"><a href="#195">195</a></td></tr
><tr id="gr_svn2402_196"

><td id="196"><a href="#196">196</a></td></tr
><tr id="gr_svn2402_197"

><td id="197"><a href="#197">197</a></td></tr
><tr id="gr_svn2402_198"

><td id="198"><a href="#198">198</a></td></tr
><tr id="gr_svn2402_199"

><td id="199"><a href="#199">199</a></td></tr
><tr id="gr_svn2402_200"

><td id="200"><a href="#200">200</a></td></tr
><tr id="gr_svn2402_201"

><td id="201"><a href="#201">201</a></td></tr
><tr id="gr_svn2402_202"

><td id="202"><a href="#202">202</a></td></tr
><tr id="gr_svn2402_203"

><td id="203"><a href="#203">203</a></td></tr
><tr id="gr_svn2402_204"

><td id="204"><a href="#204">204</a></td></tr
><tr id="gr_svn2402_205"

><td id="205"><a href="#205">205</a></td></tr
><tr id="gr_svn2402_206"

><td id="206"><a href="#206">206</a></td></tr
><tr id="gr_svn2402_207"

><td id="207"><a href="#207">207</a></td></tr
><tr id="gr_svn2402_208"

><td id="208"><a href="#208">208</a></td></tr
><tr id="gr_svn2402_209"

><td id="209"><a href="#209">209</a></td></tr
><tr id="gr_svn2402_210"

><td id="210"><a href="#210">210</a></td></tr
><tr id="gr_svn2402_211"

><td id="211"><a href="#211">211</a></td></tr
><tr id="gr_svn2402_212"

><td id="212"><a href="#212">212</a></td></tr
><tr id="gr_svn2402_213"

><td id="213"><a href="#213">213</a></td></tr
><tr id="gr_svn2402_214"

><td id="214"><a href="#214">214</a></td></tr
><tr id="gr_svn2402_215"

><td id="215"><a href="#215">215</a></td></tr
><tr id="gr_svn2402_216"

><td id="216"><a href="#216">216</a></td></tr
><tr id="gr_svn2402_217"

><td id="217"><a href="#217">217</a></td></tr
><tr id="gr_svn2402_218"

><td id="218"><a href="#218">218</a></td></tr
><tr id="gr_svn2402_219"

><td id="219"><a href="#219">219</a></td></tr
><tr id="gr_svn2402_220"

><td id="220"><a href="#220">220</a></td></tr
><tr id="gr_svn2402_221"

><td id="221"><a href="#221">221</a></td></tr
><tr id="gr_svn2402_222"

><td id="222"><a href="#222">222</a></td></tr
><tr id="gr_svn2402_223"

><td id="223"><a href="#223">223</a></td></tr
><tr id="gr_svn2402_224"

><td id="224"><a href="#224">224</a></td></tr
><tr id="gr_svn2402_225"

><td id="225"><a href="#225">225</a></td></tr
><tr id="gr_svn2402_226"

><td id="226"><a href="#226">226</a></td></tr
><tr id="gr_svn2402_227"

><td id="227"><a href="#227">227</a></td></tr
><tr id="gr_svn2402_228"

><td id="228"><a href="#228">228</a></td></tr
><tr id="gr_svn2402_229"

><td id="229"><a href="#229">229</a></td></tr
><tr id="gr_svn2402_230"

><td id="230"><a href="#230">230</a></td></tr
><tr id="gr_svn2402_231"

><td id="231"><a href="#231">231</a></td></tr
><tr id="gr_svn2402_232"

><td id="232"><a href="#232">232</a></td></tr
><tr id="gr_svn2402_233"

><td id="233"><a href="#233">233</a></td></tr
><tr id="gr_svn2402_234"

><td id="234"><a href="#234">234</a></td></tr
><tr id="gr_svn2402_235"

><td id="235"><a href="#235">235</a></td></tr
><tr id="gr_svn2402_236"

><td id="236"><a href="#236">236</a></td></tr
><tr id="gr_svn2402_237"

><td id="237"><a href="#237">237</a></td></tr
><tr id="gr_svn2402_238"

><td id="238"><a href="#238">238</a></td></tr
><tr id="gr_svn2402_239"

><td id="239"><a href="#239">239</a></td></tr
><tr id="gr_svn2402_240"

><td id="240"><a href="#240">240</a></td></tr
><tr id="gr_svn2402_241"

><td id="241"><a href="#241">241</a></td></tr
><tr id="gr_svn2402_242"

><td id="242"><a href="#242">242</a></td></tr
><tr id="gr_svn2402_243"

><td id="243"><a href="#243">243</a></td></tr
><tr id="gr_svn2402_244"

><td id="244"><a href="#244">244</a></td></tr
><tr id="gr_svn2402_245"

><td id="245"><a href="#245">245</a></td></tr
><tr id="gr_svn2402_246"

><td id="246"><a href="#246">246</a></td></tr
><tr id="gr_svn2402_247"

><td id="247"><a href="#247">247</a></td></tr
><tr id="gr_svn2402_248"

><td id="248"><a href="#248">248</a></td></tr
><tr id="gr_svn2402_249"

><td id="249"><a href="#249">249</a></td></tr
><tr id="gr_svn2402_250"

><td id="250"><a href="#250">250</a></td></tr
><tr id="gr_svn2402_251"

><td id="251"><a href="#251">251</a></td></tr
><tr id="gr_svn2402_252"

><td id="252"><a href="#252">252</a></td></tr
><tr id="gr_svn2402_253"

><td id="253"><a href="#253">253</a></td></tr
><tr id="gr_svn2402_254"

><td id="254"><a href="#254">254</a></td></tr
><tr id="gr_svn2402_255"

><td id="255"><a href="#255">255</a></td></tr
><tr id="gr_svn2402_256"

><td id="256"><a href="#256">256</a></td></tr
><tr id="gr_svn2402_257"

><td id="257"><a href="#257">257</a></td></tr
><tr id="gr_svn2402_258"

><td id="258"><a href="#258">258</a></td></tr
><tr id="gr_svn2402_259"

><td id="259"><a href="#259">259</a></td></tr
><tr id="gr_svn2402_260"

><td id="260"><a href="#260">260</a></td></tr
><tr id="gr_svn2402_261"

><td id="261"><a href="#261">261</a></td></tr
><tr id="gr_svn2402_262"

><td id="262"><a href="#262">262</a></td></tr
><tr id="gr_svn2402_263"

><td id="263"><a href="#263">263</a></td></tr
><tr id="gr_svn2402_264"

><td id="264"><a href="#264">264</a></td></tr
><tr id="gr_svn2402_265"

><td id="265"><a href="#265">265</a></td></tr
><tr id="gr_svn2402_266"

><td id="266"><a href="#266">266</a></td></tr
><tr id="gr_svn2402_267"

><td id="267"><a href="#267">267</a></td></tr
><tr id="gr_svn2402_268"

><td id="268"><a href="#268">268</a></td></tr
><tr id="gr_svn2402_269"

><td id="269"><a href="#269">269</a></td></tr
><tr id="gr_svn2402_270"

><td id="270"><a href="#270">270</a></td></tr
><tr id="gr_svn2402_271"

><td id="271"><a href="#271">271</a></td></tr
><tr id="gr_svn2402_272"

><td id="272"><a href="#272">272</a></td></tr
><tr id="gr_svn2402_273"

><td id="273"><a href="#273">273</a></td></tr
><tr id="gr_svn2402_274"

><td id="274"><a href="#274">274</a></td></tr
><tr id="gr_svn2402_275"

><td id="275"><a href="#275">275</a></td></tr
><tr id="gr_svn2402_276"

><td id="276"><a href="#276">276</a></td></tr
><tr id="gr_svn2402_277"

><td id="277"><a href="#277">277</a></td></tr
><tr id="gr_svn2402_278"

><td id="278"><a href="#278">278</a></td></tr
><tr id="gr_svn2402_279"

><td id="279"><a href="#279">279</a></td></tr
><tr id="gr_svn2402_280"

><td id="280"><a href="#280">280</a></td></tr
><tr id="gr_svn2402_281"

><td id="281"><a href="#281">281</a></td></tr
><tr id="gr_svn2402_282"

><td id="282"><a href="#282">282</a></td></tr
><tr id="gr_svn2402_283"

><td id="283"><a href="#283">283</a></td></tr
><tr id="gr_svn2402_284"

><td id="284"><a href="#284">284</a></td></tr
><tr id="gr_svn2402_285"

><td id="285"><a href="#285">285</a></td></tr
><tr id="gr_svn2402_286"

><td id="286"><a href="#286">286</a></td></tr
><tr id="gr_svn2402_287"

><td id="287"><a href="#287">287</a></td></tr
><tr id="gr_svn2402_288"

><td id="288"><a href="#288">288</a></td></tr
><tr id="gr_svn2402_289"

><td id="289"><a href="#289">289</a></td></tr
><tr id="gr_svn2402_290"

><td id="290"><a href="#290">290</a></td></tr
><tr id="gr_svn2402_291"

><td id="291"><a href="#291">291</a></td></tr
><tr id="gr_svn2402_292"

><td id="292"><a href="#292">292</a></td></tr
><tr id="gr_svn2402_293"

><td id="293"><a href="#293">293</a></td></tr
><tr id="gr_svn2402_294"

><td id="294"><a href="#294">294</a></td></tr
><tr id="gr_svn2402_295"

><td id="295"><a href="#295">295</a></td></tr
><tr id="gr_svn2402_296"

><td id="296"><a href="#296">296</a></td></tr
><tr id="gr_svn2402_297"

><td id="297"><a href="#297">297</a></td></tr
><tr id="gr_svn2402_298"

><td id="298"><a href="#298">298</a></td></tr
><tr id="gr_svn2402_299"

><td id="299"><a href="#299">299</a></td></tr
><tr id="gr_svn2402_300"

><td id="300"><a href="#300">300</a></td></tr
><tr id="gr_svn2402_301"

><td id="301"><a href="#301">301</a></td></tr
><tr id="gr_svn2402_302"

><td id="302"><a href="#302">302</a></td></tr
><tr id="gr_svn2402_303"

><td id="303"><a href="#303">303</a></td></tr
><tr id="gr_svn2402_304"

><td id="304"><a href="#304">304</a></td></tr
><tr id="gr_svn2402_305"

><td id="305"><a href="#305">305</a></td></tr
><tr id="gr_svn2402_306"

><td id="306"><a href="#306">306</a></td></tr
><tr id="gr_svn2402_307"

><td id="307"><a href="#307">307</a></td></tr
><tr id="gr_svn2402_308"

><td id="308"><a href="#308">308</a></td></tr
><tr id="gr_svn2402_309"

><td id="309"><a href="#309">309</a></td></tr
><tr id="gr_svn2402_310"

><td id="310"><a href="#310">310</a></td></tr
><tr id="gr_svn2402_311"

><td id="311"><a href="#311">311</a></td></tr
><tr id="gr_svn2402_312"

><td id="312"><a href="#312">312</a></td></tr
><tr id="gr_svn2402_313"

><td id="313"><a href="#313">313</a></td></tr
><tr id="gr_svn2402_314"

><td id="314"><a href="#314">314</a></td></tr
><tr id="gr_svn2402_315"

><td id="315"><a href="#315">315</a></td></tr
><tr id="gr_svn2402_316"

><td id="316"><a href="#316">316</a></td></tr
><tr id="gr_svn2402_317"

><td id="317"><a href="#317">317</a></td></tr
><tr id="gr_svn2402_318"

><td id="318"><a href="#318">318</a></td></tr
><tr id="gr_svn2402_319"

><td id="319"><a href="#319">319</a></td></tr
><tr id="gr_svn2402_320"

><td id="320"><a href="#320">320</a></td></tr
><tr id="gr_svn2402_321"

><td id="321"><a href="#321">321</a></td></tr
><tr id="gr_svn2402_322"

><td id="322"><a href="#322">322</a></td></tr
><tr id="gr_svn2402_323"

><td id="323"><a href="#323">323</a></td></tr
><tr id="gr_svn2402_324"

><td id="324"><a href="#324">324</a></td></tr
><tr id="gr_svn2402_325"

><td id="325"><a href="#325">325</a></td></tr
><tr id="gr_svn2402_326"

><td id="326"><a href="#326">326</a></td></tr
><tr id="gr_svn2402_327"

><td id="327"><a href="#327">327</a></td></tr
><tr id="gr_svn2402_328"

><td id="328"><a href="#328">328</a></td></tr
><tr id="gr_svn2402_329"

><td id="329"><a href="#329">329</a></td></tr
><tr id="gr_svn2402_330"

><td id="330"><a href="#330">330</a></td></tr
><tr id="gr_svn2402_331"

><td id="331"><a href="#331">331</a></td></tr
><tr id="gr_svn2402_332"

><td id="332"><a href="#332">332</a></td></tr
><tr id="gr_svn2402_333"

><td id="333"><a href="#333">333</a></td></tr
><tr id="gr_svn2402_334"

><td id="334"><a href="#334">334</a></td></tr
><tr id="gr_svn2402_335"

><td id="335"><a href="#335">335</a></td></tr
><tr id="gr_svn2402_336"

><td id="336"><a href="#336">336</a></td></tr
><tr id="gr_svn2402_337"

><td id="337"><a href="#337">337</a></td></tr
><tr id="gr_svn2402_338"

><td id="338"><a href="#338">338</a></td></tr
><tr id="gr_svn2402_339"

><td id="339"><a href="#339">339</a></td></tr
><tr id="gr_svn2402_340"

><td id="340"><a href="#340">340</a></td></tr
><tr id="gr_svn2402_341"

><td id="341"><a href="#341">341</a></td></tr
><tr id="gr_svn2402_342"

><td id="342"><a href="#342">342</a></td></tr
><tr id="gr_svn2402_343"

><td id="343"><a href="#343">343</a></td></tr
><tr id="gr_svn2402_344"

><td id="344"><a href="#344">344</a></td></tr
><tr id="gr_svn2402_345"

><td id="345"><a href="#345">345</a></td></tr
><tr id="gr_svn2402_346"

><td id="346"><a href="#346">346</a></td></tr
><tr id="gr_svn2402_347"

><td id="347"><a href="#347">347</a></td></tr
><tr id="gr_svn2402_348"

><td id="348"><a href="#348">348</a></td></tr
><tr id="gr_svn2402_349"

><td id="349"><a href="#349">349</a></td></tr
><tr id="gr_svn2402_350"

><td id="350"><a href="#350">350</a></td></tr
><tr id="gr_svn2402_351"

><td id="351"><a href="#351">351</a></td></tr
><tr id="gr_svn2402_352"

><td id="352"><a href="#352">352</a></td></tr
><tr id="gr_svn2402_353"

><td id="353"><a href="#353">353</a></td></tr
><tr id="gr_svn2402_354"

><td id="354"><a href="#354">354</a></td></tr
><tr id="gr_svn2402_355"

><td id="355"><a href="#355">355</a></td></tr
><tr id="gr_svn2402_356"

><td id="356"><a href="#356">356</a></td></tr
><tr id="gr_svn2402_357"

><td id="357"><a href="#357">357</a></td></tr
><tr id="gr_svn2402_358"

><td id="358"><a href="#358">358</a></td></tr
><tr id="gr_svn2402_359"

><td id="359"><a href="#359">359</a></td></tr
><tr id="gr_svn2402_360"

><td id="360"><a href="#360">360</a></td></tr
><tr id="gr_svn2402_361"

><td id="361"><a href="#361">361</a></td></tr
><tr id="gr_svn2402_362"

><td id="362"><a href="#362">362</a></td></tr
><tr id="gr_svn2402_363"

><td id="363"><a href="#363">363</a></td></tr
><tr id="gr_svn2402_364"

><td id="364"><a href="#364">364</a></td></tr
><tr id="gr_svn2402_365"

><td id="365"><a href="#365">365</a></td></tr
><tr id="gr_svn2402_366"

><td id="366"><a href="#366">366</a></td></tr
><tr id="gr_svn2402_367"

><td id="367"><a href="#367">367</a></td></tr
><tr id="gr_svn2402_368"

><td id="368"><a href="#368">368</a></td></tr
><tr id="gr_svn2402_369"

><td id="369"><a href="#369">369</a></td></tr
><tr id="gr_svn2402_370"

><td id="370"><a href="#370">370</a></td></tr
><tr id="gr_svn2402_371"

><td id="371"><a href="#371">371</a></td></tr
><tr id="gr_svn2402_372"

><td id="372"><a href="#372">372</a></td></tr
><tr id="gr_svn2402_373"

><td id="373"><a href="#373">373</a></td></tr
><tr id="gr_svn2402_374"

><td id="374"><a href="#374">374</a></td></tr
><tr id="gr_svn2402_375"

><td id="375"><a href="#375">375</a></td></tr
><tr id="gr_svn2402_376"

><td id="376"><a href="#376">376</a></td></tr
><tr id="gr_svn2402_377"

><td id="377"><a href="#377">377</a></td></tr
><tr id="gr_svn2402_378"

><td id="378"><a href="#378">378</a></td></tr
><tr id="gr_svn2402_379"

><td id="379"><a href="#379">379</a></td></tr
><tr id="gr_svn2402_380"

><td id="380"><a href="#380">380</a></td></tr
><tr id="gr_svn2402_381"

><td id="381"><a href="#381">381</a></td></tr
><tr id="gr_svn2402_382"

><td id="382"><a href="#382">382</a></td></tr
><tr id="gr_svn2402_383"

><td id="383"><a href="#383">383</a></td></tr
><tr id="gr_svn2402_384"

><td id="384"><a href="#384">384</a></td></tr
><tr id="gr_svn2402_385"

><td id="385"><a href="#385">385</a></td></tr
><tr id="gr_svn2402_386"

><td id="386"><a href="#386">386</a></td></tr
><tr id="gr_svn2402_387"

><td id="387"><a href="#387">387</a></td></tr
><tr id="gr_svn2402_388"

><td id="388"><a href="#388">388</a></td></tr
><tr id="gr_svn2402_389"

><td id="389"><a href="#389">389</a></td></tr
><tr id="gr_svn2402_390"

><td id="390"><a href="#390">390</a></td></tr
><tr id="gr_svn2402_391"

><td id="391"><a href="#391">391</a></td></tr
><tr id="gr_svn2402_392"

><td id="392"><a href="#392">392</a></td></tr
><tr id="gr_svn2402_393"

><td id="393"><a href="#393">393</a></td></tr
><tr id="gr_svn2402_394"

><td id="394"><a href="#394">394</a></td></tr
><tr id="gr_svn2402_395"

><td id="395"><a href="#395">395</a></td></tr
><tr id="gr_svn2402_396"

><td id="396"><a href="#396">396</a></td></tr
><tr id="gr_svn2402_397"

><td id="397"><a href="#397">397</a></td></tr
><tr id="gr_svn2402_398"

><td id="398"><a href="#398">398</a></td></tr
><tr id="gr_svn2402_399"

><td id="399"><a href="#399">399</a></td></tr
><tr id="gr_svn2402_400"

><td id="400"><a href="#400">400</a></td></tr
><tr id="gr_svn2402_401"

><td id="401"><a href="#401">401</a></td></tr
><tr id="gr_svn2402_402"

><td id="402"><a href="#402">402</a></td></tr
><tr id="gr_svn2402_403"

><td id="403"><a href="#403">403</a></td></tr
><tr id="gr_svn2402_404"

><td id="404"><a href="#404">404</a></td></tr
><tr id="gr_svn2402_405"

><td id="405"><a href="#405">405</a></td></tr
><tr id="gr_svn2402_406"

><td id="406"><a href="#406">406</a></td></tr
><tr id="gr_svn2402_407"

><td id="407"><a href="#407">407</a></td></tr
><tr id="gr_svn2402_408"

><td id="408"><a href="#408">408</a></td></tr
><tr id="gr_svn2402_409"

><td id="409"><a href="#409">409</a></td></tr
><tr id="gr_svn2402_410"

><td id="410"><a href="#410">410</a></td></tr
><tr id="gr_svn2402_411"

><td id="411"><a href="#411">411</a></td></tr
><tr id="gr_svn2402_412"

><td id="412"><a href="#412">412</a></td></tr
><tr id="gr_svn2402_413"

><td id="413"><a href="#413">413</a></td></tr
><tr id="gr_svn2402_414"

><td id="414"><a href="#414">414</a></td></tr
><tr id="gr_svn2402_415"

><td id="415"><a href="#415">415</a></td></tr
><tr id="gr_svn2402_416"

><td id="416"><a href="#416">416</a></td></tr
><tr id="gr_svn2402_417"

><td id="417"><a href="#417">417</a></td></tr
><tr id="gr_svn2402_418"

><td id="418"><a href="#418">418</a></td></tr
><tr id="gr_svn2402_419"

><td id="419"><a href="#419">419</a></td></tr
><tr id="gr_svn2402_420"

><td id="420"><a href="#420">420</a></td></tr
><tr id="gr_svn2402_421"

><td id="421"><a href="#421">421</a></td></tr
><tr id="gr_svn2402_422"

><td id="422"><a href="#422">422</a></td></tr
><tr id="gr_svn2402_423"

><td id="423"><a href="#423">423</a></td></tr
><tr id="gr_svn2402_424"

><td id="424"><a href="#424">424</a></td></tr
><tr id="gr_svn2402_425"

><td id="425"><a href="#425">425</a></td></tr
><tr id="gr_svn2402_426"

><td id="426"><a href="#426">426</a></td></tr
><tr id="gr_svn2402_427"

><td id="427"><a href="#427">427</a></td></tr
><tr id="gr_svn2402_428"

><td id="428"><a href="#428">428</a></td></tr
><tr id="gr_svn2402_429"

><td id="429"><a href="#429">429</a></td></tr
><tr id="gr_svn2402_430"

><td id="430"><a href="#430">430</a></td></tr
><tr id="gr_svn2402_431"

><td id="431"><a href="#431">431</a></td></tr
><tr id="gr_svn2402_432"

><td id="432"><a href="#432">432</a></td></tr
><tr id="gr_svn2402_433"

><td id="433"><a href="#433">433</a></td></tr
><tr id="gr_svn2402_434"

><td id="434"><a href="#434">434</a></td></tr
><tr id="gr_svn2402_435"

><td id="435"><a href="#435">435</a></td></tr
><tr id="gr_svn2402_436"

><td id="436"><a href="#436">436</a></td></tr
><tr id="gr_svn2402_437"

><td id="437"><a href="#437">437</a></td></tr
><tr id="gr_svn2402_438"

><td id="438"><a href="#438">438</a></td></tr
><tr id="gr_svn2402_439"

><td id="439"><a href="#439">439</a></td></tr
><tr id="gr_svn2402_440"

><td id="440"><a href="#440">440</a></td></tr
><tr id="gr_svn2402_441"

><td id="441"><a href="#441">441</a></td></tr
><tr id="gr_svn2402_442"

><td id="442"><a href="#442">442</a></td></tr
><tr id="gr_svn2402_443"

><td id="443"><a href="#443">443</a></td></tr
><tr id="gr_svn2402_444"

><td id="444"><a href="#444">444</a></td></tr
><tr id="gr_svn2402_445"

><td id="445"><a href="#445">445</a></td></tr
><tr id="gr_svn2402_446"

><td id="446"><a href="#446">446</a></td></tr
><tr id="gr_svn2402_447"

><td id="447"><a href="#447">447</a></td></tr
><tr id="gr_svn2402_448"

><td id="448"><a href="#448">448</a></td></tr
><tr id="gr_svn2402_449"

><td id="449"><a href="#449">449</a></td></tr
><tr id="gr_svn2402_450"

><td id="450"><a href="#450">450</a></td></tr
><tr id="gr_svn2402_451"

><td id="451"><a href="#451">451</a></td></tr
><tr id="gr_svn2402_452"

><td id="452"><a href="#452">452</a></td></tr
><tr id="gr_svn2402_453"

><td id="453"><a href="#453">453</a></td></tr
><tr id="gr_svn2402_454"

><td id="454"><a href="#454">454</a></td></tr
><tr id="gr_svn2402_455"

><td id="455"><a href="#455">455</a></td></tr
><tr id="gr_svn2402_456"

><td id="456"><a href="#456">456</a></td></tr
><tr id="gr_svn2402_457"

><td id="457"><a href="#457">457</a></td></tr
><tr id="gr_svn2402_458"

><td id="458"><a href="#458">458</a></td></tr
><tr id="gr_svn2402_459"

><td id="459"><a href="#459">459</a></td></tr
><tr id="gr_svn2402_460"

><td id="460"><a href="#460">460</a></td></tr
><tr id="gr_svn2402_461"

><td id="461"><a href="#461">461</a></td></tr
><tr id="gr_svn2402_462"

><td id="462"><a href="#462">462</a></td></tr
><tr id="gr_svn2402_463"

><td id="463"><a href="#463">463</a></td></tr
><tr id="gr_svn2402_464"

><td id="464"><a href="#464">464</a></td></tr
><tr id="gr_svn2402_465"

><td id="465"><a href="#465">465</a></td></tr
><tr id="gr_svn2402_466"

><td id="466"><a href="#466">466</a></td></tr
><tr id="gr_svn2402_467"

><td id="467"><a href="#467">467</a></td></tr
><tr id="gr_svn2402_468"

><td id="468"><a href="#468">468</a></td></tr
><tr id="gr_svn2402_469"

><td id="469"><a href="#469">469</a></td></tr
><tr id="gr_svn2402_470"

><td id="470"><a href="#470">470</a></td></tr
><tr id="gr_svn2402_471"

><td id="471"><a href="#471">471</a></td></tr
><tr id="gr_svn2402_472"

><td id="472"><a href="#472">472</a></td></tr
><tr id="gr_svn2402_473"

><td id="473"><a href="#473">473</a></td></tr
><tr id="gr_svn2402_474"

><td id="474"><a href="#474">474</a></td></tr
><tr id="gr_svn2402_475"

><td id="475"><a href="#475">475</a></td></tr
><tr id="gr_svn2402_476"

><td id="476"><a href="#476">476</a></td></tr
><tr id="gr_svn2402_477"

><td id="477"><a href="#477">477</a></td></tr
><tr id="gr_svn2402_478"

><td id="478"><a href="#478">478</a></td></tr
><tr id="gr_svn2402_479"

><td id="479"><a href="#479">479</a></td></tr
><tr id="gr_svn2402_480"

><td id="480"><a href="#480">480</a></td></tr
><tr id="gr_svn2402_481"

><td id="481"><a href="#481">481</a></td></tr
><tr id="gr_svn2402_482"

><td id="482"><a href="#482">482</a></td></tr
><tr id="gr_svn2402_483"

><td id="483"><a href="#483">483</a></td></tr
><tr id="gr_svn2402_484"

><td id="484"><a href="#484">484</a></td></tr
><tr id="gr_svn2402_485"

><td id="485"><a href="#485">485</a></td></tr
><tr id="gr_svn2402_486"

><td id="486"><a href="#486">486</a></td></tr
><tr id="gr_svn2402_487"

><td id="487"><a href="#487">487</a></td></tr
><tr id="gr_svn2402_488"

><td id="488"><a href="#488">488</a></td></tr
><tr id="gr_svn2402_489"

><td id="489"><a href="#489">489</a></td></tr
><tr id="gr_svn2402_490"

><td id="490"><a href="#490">490</a></td></tr
><tr id="gr_svn2402_491"

><td id="491"><a href="#491">491</a></td></tr
><tr id="gr_svn2402_492"

><td id="492"><a href="#492">492</a></td></tr
><tr id="gr_svn2402_493"

><td id="493"><a href="#493">493</a></td></tr
><tr id="gr_svn2402_494"

><td id="494"><a href="#494">494</a></td></tr
><tr id="gr_svn2402_495"

><td id="495"><a href="#495">495</a></td></tr
><tr id="gr_svn2402_496"

><td id="496"><a href="#496">496</a></td></tr
><tr id="gr_svn2402_497"

><td id="497"><a href="#497">497</a></td></tr
><tr id="gr_svn2402_498"

><td id="498"><a href="#498">498</a></td></tr
><tr id="gr_svn2402_499"

><td id="499"><a href="#499">499</a></td></tr
><tr id="gr_svn2402_500"

><td id="500"><a href="#500">500</a></td></tr
><tr id="gr_svn2402_501"

><td id="501"><a href="#501">501</a></td></tr
><tr id="gr_svn2402_502"

><td id="502"><a href="#502">502</a></td></tr
><tr id="gr_svn2402_503"

><td id="503"><a href="#503">503</a></td></tr
><tr id="gr_svn2402_504"

><td id="504"><a href="#504">504</a></td></tr
><tr id="gr_svn2402_505"

><td id="505"><a href="#505">505</a></td></tr
><tr id="gr_svn2402_506"

><td id="506"><a href="#506">506</a></td></tr
><tr id="gr_svn2402_507"

><td id="507"><a href="#507">507</a></td></tr
><tr id="gr_svn2402_508"

><td id="508"><a href="#508">508</a></td></tr
><tr id="gr_svn2402_509"

><td id="509"><a href="#509">509</a></td></tr
><tr id="gr_svn2402_510"

><td id="510"><a href="#510">510</a></td></tr
><tr id="gr_svn2402_511"

><td id="511"><a href="#511">511</a></td></tr
><tr id="gr_svn2402_512"

><td id="512"><a href="#512">512</a></td></tr
><tr id="gr_svn2402_513"

><td id="513"><a href="#513">513</a></td></tr
><tr id="gr_svn2402_514"

><td id="514"><a href="#514">514</a></td></tr
><tr id="gr_svn2402_515"

><td id="515"><a href="#515">515</a></td></tr
><tr id="gr_svn2402_516"

><td id="516"><a href="#516">516</a></td></tr
><tr id="gr_svn2402_517"

><td id="517"><a href="#517">517</a></td></tr
><tr id="gr_svn2402_518"

><td id="518"><a href="#518">518</a></td></tr
><tr id="gr_svn2402_519"

><td id="519"><a href="#519">519</a></td></tr
><tr id="gr_svn2402_520"

><td id="520"><a href="#520">520</a></td></tr
><tr id="gr_svn2402_521"

><td id="521"><a href="#521">521</a></td></tr
><tr id="gr_svn2402_522"

><td id="522"><a href="#522">522</a></td></tr
><tr id="gr_svn2402_523"

><td id="523"><a href="#523">523</a></td></tr
><tr id="gr_svn2402_524"

><td id="524"><a href="#524">524</a></td></tr
><tr id="gr_svn2402_525"

><td id="525"><a href="#525">525</a></td></tr
><tr id="gr_svn2402_526"

><td id="526"><a href="#526">526</a></td></tr
><tr id="gr_svn2402_527"

><td id="527"><a href="#527">527</a></td></tr
><tr id="gr_svn2402_528"

><td id="528"><a href="#528">528</a></td></tr
><tr id="gr_svn2402_529"

><td id="529"><a href="#529">529</a></td></tr
><tr id="gr_svn2402_530"

><td id="530"><a href="#530">530</a></td></tr
><tr id="gr_svn2402_531"

><td id="531"><a href="#531">531</a></td></tr
><tr id="gr_svn2402_532"

><td id="532"><a href="#532">532</a></td></tr
><tr id="gr_svn2402_533"

><td id="533"><a href="#533">533</a></td></tr
><tr id="gr_svn2402_534"

><td id="534"><a href="#534">534</a></td></tr
><tr id="gr_svn2402_535"

><td id="535"><a href="#535">535</a></td></tr
><tr id="gr_svn2402_536"

><td id="536"><a href="#536">536</a></td></tr
><tr id="gr_svn2402_537"

><td id="537"><a href="#537">537</a></td></tr
><tr id="gr_svn2402_538"

><td id="538"><a href="#538">538</a></td></tr
><tr id="gr_svn2402_539"

><td id="539"><a href="#539">539</a></td></tr
><tr id="gr_svn2402_540"

><td id="540"><a href="#540">540</a></td></tr
><tr id="gr_svn2402_541"

><td id="541"><a href="#541">541</a></td></tr
><tr id="gr_svn2402_542"

><td id="542"><a href="#542">542</a></td></tr
><tr id="gr_svn2402_543"

><td id="543"><a href="#543">543</a></td></tr
><tr id="gr_svn2402_544"

><td id="544"><a href="#544">544</a></td></tr
><tr id="gr_svn2402_545"

><td id="545"><a href="#545">545</a></td></tr
><tr id="gr_svn2402_546"

><td id="546"><a href="#546">546</a></td></tr
><tr id="gr_svn2402_547"

><td id="547"><a href="#547">547</a></td></tr
><tr id="gr_svn2402_548"

><td id="548"><a href="#548">548</a></td></tr
><tr id="gr_svn2402_549"

><td id="549"><a href="#549">549</a></td></tr
><tr id="gr_svn2402_550"

><td id="550"><a href="#550">550</a></td></tr
><tr id="gr_svn2402_551"

><td id="551"><a href="#551">551</a></td></tr
><tr id="gr_svn2402_552"

><td id="552"><a href="#552">552</a></td></tr
><tr id="gr_svn2402_553"

><td id="553"><a href="#553">553</a></td></tr
><tr id="gr_svn2402_554"

><td id="554"><a href="#554">554</a></td></tr
><tr id="gr_svn2402_555"

><td id="555"><a href="#555">555</a></td></tr
><tr id="gr_svn2402_556"

><td id="556"><a href="#556">556</a></td></tr
><tr id="gr_svn2402_557"

><td id="557"><a href="#557">557</a></td></tr
><tr id="gr_svn2402_558"

><td id="558"><a href="#558">558</a></td></tr
><tr id="gr_svn2402_559"

><td id="559"><a href="#559">559</a></td></tr
><tr id="gr_svn2402_560"

><td id="560"><a href="#560">560</a></td></tr
><tr id="gr_svn2402_561"

><td id="561"><a href="#561">561</a></td></tr
><tr id="gr_svn2402_562"

><td id="562"><a href="#562">562</a></td></tr
><tr id="gr_svn2402_563"

><td id="563"><a href="#563">563</a></td></tr
><tr id="gr_svn2402_564"

><td id="564"><a href="#564">564</a></td></tr
><tr id="gr_svn2402_565"

><td id="565"><a href="#565">565</a></td></tr
><tr id="gr_svn2402_566"

><td id="566"><a href="#566">566</a></td></tr
><tr id="gr_svn2402_567"

><td id="567"><a href="#567">567</a></td></tr
><tr id="gr_svn2402_568"

><td id="568"><a href="#568">568</a></td></tr
><tr id="gr_svn2402_569"

><td id="569"><a href="#569">569</a></td></tr
><tr id="gr_svn2402_570"

><td id="570"><a href="#570">570</a></td></tr
><tr id="gr_svn2402_571"

><td id="571"><a href="#571">571</a></td></tr
><tr id="gr_svn2402_572"

><td id="572"><a href="#572">572</a></td></tr
><tr id="gr_svn2402_573"

><td id="573"><a href="#573">573</a></td></tr
><tr id="gr_svn2402_574"

><td id="574"><a href="#574">574</a></td></tr
><tr id="gr_svn2402_575"

><td id="575"><a href="#575">575</a></td></tr
><tr id="gr_svn2402_576"

><td id="576"><a href="#576">576</a></td></tr
><tr id="gr_svn2402_577"

><td id="577"><a href="#577">577</a></td></tr
><tr id="gr_svn2402_578"

><td id="578"><a href="#578">578</a></td></tr
><tr id="gr_svn2402_579"

><td id="579"><a href="#579">579</a></td></tr
><tr id="gr_svn2402_580"

><td id="580"><a href="#580">580</a></td></tr
><tr id="gr_svn2402_581"

><td id="581"><a href="#581">581</a></td></tr
><tr id="gr_svn2402_582"

><td id="582"><a href="#582">582</a></td></tr
><tr id="gr_svn2402_583"

><td id="583"><a href="#583">583</a></td></tr
><tr id="gr_svn2402_584"

><td id="584"><a href="#584">584</a></td></tr
><tr id="gr_svn2402_585"

><td id="585"><a href="#585">585</a></td></tr
><tr id="gr_svn2402_586"

><td id="586"><a href="#586">586</a></td></tr
><tr id="gr_svn2402_587"

><td id="587"><a href="#587">587</a></td></tr
><tr id="gr_svn2402_588"

><td id="588"><a href="#588">588</a></td></tr
><tr id="gr_svn2402_589"

><td id="589"><a href="#589">589</a></td></tr
><tr id="gr_svn2402_590"

><td id="590"><a href="#590">590</a></td></tr
><tr id="gr_svn2402_591"

><td id="591"><a href="#591">591</a></td></tr
><tr id="gr_svn2402_592"

><td id="592"><a href="#592">592</a></td></tr
><tr id="gr_svn2402_593"

><td id="593"><a href="#593">593</a></td></tr
><tr id="gr_svn2402_594"

><td id="594"><a href="#594">594</a></td></tr
><tr id="gr_svn2402_595"

><td id="595"><a href="#595">595</a></td></tr
><tr id="gr_svn2402_596"

><td id="596"><a href="#596">596</a></td></tr
><tr id="gr_svn2402_597"

><td id="597"><a href="#597">597</a></td></tr
><tr id="gr_svn2402_598"

><td id="598"><a href="#598">598</a></td></tr
><tr id="gr_svn2402_599"

><td id="599"><a href="#599">599</a></td></tr
><tr id="gr_svn2402_600"

><td id="600"><a href="#600">600</a></td></tr
><tr id="gr_svn2402_601"

><td id="601"><a href="#601">601</a></td></tr
><tr id="gr_svn2402_602"

><td id="602"><a href="#602">602</a></td></tr
><tr id="gr_svn2402_603"

><td id="603"><a href="#603">603</a></td></tr
><tr id="gr_svn2402_604"

><td id="604"><a href="#604">604</a></td></tr
><tr id="gr_svn2402_605"

><td id="605"><a href="#605">605</a></td></tr
><tr id="gr_svn2402_606"

><td id="606"><a href="#606">606</a></td></tr
><tr id="gr_svn2402_607"

><td id="607"><a href="#607">607</a></td></tr
><tr id="gr_svn2402_608"

><td id="608"><a href="#608">608</a></td></tr
><tr id="gr_svn2402_609"

><td id="609"><a href="#609">609</a></td></tr
><tr id="gr_svn2402_610"

><td id="610"><a href="#610">610</a></td></tr
><tr id="gr_svn2402_611"

><td id="611"><a href="#611">611</a></td></tr
><tr id="gr_svn2402_612"

><td id="612"><a href="#612">612</a></td></tr
><tr id="gr_svn2402_613"

><td id="613"><a href="#613">613</a></td></tr
><tr id="gr_svn2402_614"

><td id="614"><a href="#614">614</a></td></tr
><tr id="gr_svn2402_615"

><td id="615"><a href="#615">615</a></td></tr
><tr id="gr_svn2402_616"

><td id="616"><a href="#616">616</a></td></tr
><tr id="gr_svn2402_617"

><td id="617"><a href="#617">617</a></td></tr
><tr id="gr_svn2402_618"

><td id="618"><a href="#618">618</a></td></tr
><tr id="gr_svn2402_619"

><td id="619"><a href="#619">619</a></td></tr
><tr id="gr_svn2402_620"

><td id="620"><a href="#620">620</a></td></tr
><tr id="gr_svn2402_621"

><td id="621"><a href="#621">621</a></td></tr
><tr id="gr_svn2402_622"

><td id="622"><a href="#622">622</a></td></tr
><tr id="gr_svn2402_623"

><td id="623"><a href="#623">623</a></td></tr
><tr id="gr_svn2402_624"

><td id="624"><a href="#624">624</a></td></tr
><tr id="gr_svn2402_625"

><td id="625"><a href="#625">625</a></td></tr
><tr id="gr_svn2402_626"

><td id="626"><a href="#626">626</a></td></tr
><tr id="gr_svn2402_627"

><td id="627"><a href="#627">627</a></td></tr
><tr id="gr_svn2402_628"

><td id="628"><a href="#628">628</a></td></tr
><tr id="gr_svn2402_629"

><td id="629"><a href="#629">629</a></td></tr
><tr id="gr_svn2402_630"

><td id="630"><a href="#630">630</a></td></tr
><tr id="gr_svn2402_631"

><td id="631"><a href="#631">631</a></td></tr
><tr id="gr_svn2402_632"

><td id="632"><a href="#632">632</a></td></tr
><tr id="gr_svn2402_633"

><td id="633"><a href="#633">633</a></td></tr
><tr id="gr_svn2402_634"

><td id="634"><a href="#634">634</a></td></tr
><tr id="gr_svn2402_635"

><td id="635"><a href="#635">635</a></td></tr
><tr id="gr_svn2402_636"

><td id="636"><a href="#636">636</a></td></tr
><tr id="gr_svn2402_637"

><td id="637"><a href="#637">637</a></td></tr
><tr id="gr_svn2402_638"

><td id="638"><a href="#638">638</a></td></tr
><tr id="gr_svn2402_639"

><td id="639"><a href="#639">639</a></td></tr
><tr id="gr_svn2402_640"

><td id="640"><a href="#640">640</a></td></tr
><tr id="gr_svn2402_641"

><td id="641"><a href="#641">641</a></td></tr
><tr id="gr_svn2402_642"

><td id="642"><a href="#642">642</a></td></tr
><tr id="gr_svn2402_643"

><td id="643"><a href="#643">643</a></td></tr
><tr id="gr_svn2402_644"

><td id="644"><a href="#644">644</a></td></tr
><tr id="gr_svn2402_645"

><td id="645"><a href="#645">645</a></td></tr
><tr id="gr_svn2402_646"

><td id="646"><a href="#646">646</a></td></tr
><tr id="gr_svn2402_647"

><td id="647"><a href="#647">647</a></td></tr
><tr id="gr_svn2402_648"

><td id="648"><a href="#648">648</a></td></tr
><tr id="gr_svn2402_649"

><td id="649"><a href="#649">649</a></td></tr
><tr id="gr_svn2402_650"

><td id="650"><a href="#650">650</a></td></tr
><tr id="gr_svn2402_651"

><td id="651"><a href="#651">651</a></td></tr
><tr id="gr_svn2402_652"

><td id="652"><a href="#652">652</a></td></tr
><tr id="gr_svn2402_653"

><td id="653"><a href="#653">653</a></td></tr
><tr id="gr_svn2402_654"

><td id="654"><a href="#654">654</a></td></tr
><tr id="gr_svn2402_655"

><td id="655"><a href="#655">655</a></td></tr
><tr id="gr_svn2402_656"

><td id="656"><a href="#656">656</a></td></tr
><tr id="gr_svn2402_657"

><td id="657"><a href="#657">657</a></td></tr
><tr id="gr_svn2402_658"

><td id="658"><a href="#658">658</a></td></tr
><tr id="gr_svn2402_659"

><td id="659"><a href="#659">659</a></td></tr
><tr id="gr_svn2402_660"

><td id="660"><a href="#660">660</a></td></tr
><tr id="gr_svn2402_661"

><td id="661"><a href="#661">661</a></td></tr
><tr id="gr_svn2402_662"

><td id="662"><a href="#662">662</a></td></tr
><tr id="gr_svn2402_663"

><td id="663"><a href="#663">663</a></td></tr
><tr id="gr_svn2402_664"

><td id="664"><a href="#664">664</a></td></tr
><tr id="gr_svn2402_665"

><td id="665"><a href="#665">665</a></td></tr
><tr id="gr_svn2402_666"

><td id="666"><a href="#666">666</a></td></tr
><tr id="gr_svn2402_667"

><td id="667"><a href="#667">667</a></td></tr
><tr id="gr_svn2402_668"

><td id="668"><a href="#668">668</a></td></tr
><tr id="gr_svn2402_669"

><td id="669"><a href="#669">669</a></td></tr
><tr id="gr_svn2402_670"

><td id="670"><a href="#670">670</a></td></tr
><tr id="gr_svn2402_671"

><td id="671"><a href="#671">671</a></td></tr
><tr id="gr_svn2402_672"

><td id="672"><a href="#672">672</a></td></tr
><tr id="gr_svn2402_673"

><td id="673"><a href="#673">673</a></td></tr
><tr id="gr_svn2402_674"

><td id="674"><a href="#674">674</a></td></tr
><tr id="gr_svn2402_675"

><td id="675"><a href="#675">675</a></td></tr
><tr id="gr_svn2402_676"

><td id="676"><a href="#676">676</a></td></tr
><tr id="gr_svn2402_677"

><td id="677"><a href="#677">677</a></td></tr
><tr id="gr_svn2402_678"

><td id="678"><a href="#678">678</a></td></tr
><tr id="gr_svn2402_679"

><td id="679"><a href="#679">679</a></td></tr
><tr id="gr_svn2402_680"

><td id="680"><a href="#680">680</a></td></tr
><tr id="gr_svn2402_681"

><td id="681"><a href="#681">681</a></td></tr
><tr id="gr_svn2402_682"

><td id="682"><a href="#682">682</a></td></tr
><tr id="gr_svn2402_683"

><td id="683"><a href="#683">683</a></td></tr
><tr id="gr_svn2402_684"

><td id="684"><a href="#684">684</a></td></tr
><tr id="gr_svn2402_685"

><td id="685"><a href="#685">685</a></td></tr
><tr id="gr_svn2402_686"

><td id="686"><a href="#686">686</a></td></tr
><tr id="gr_svn2402_687"

><td id="687"><a href="#687">687</a></td></tr
><tr id="gr_svn2402_688"

><td id="688"><a href="#688">688</a></td></tr
><tr id="gr_svn2402_689"

><td id="689"><a href="#689">689</a></td></tr
><tr id="gr_svn2402_690"

><td id="690"><a href="#690">690</a></td></tr
><tr id="gr_svn2402_691"

><td id="691"><a href="#691">691</a></td></tr
><tr id="gr_svn2402_692"

><td id="692"><a href="#692">692</a></td></tr
><tr id="gr_svn2402_693"

><td id="693"><a href="#693">693</a></td></tr
><tr id="gr_svn2402_694"

><td id="694"><a href="#694">694</a></td></tr
><tr id="gr_svn2402_695"

><td id="695"><a href="#695">695</a></td></tr
><tr id="gr_svn2402_696"

><td id="696"><a href="#696">696</a></td></tr
><tr id="gr_svn2402_697"

><td id="697"><a href="#697">697</a></td></tr
><tr id="gr_svn2402_698"

><td id="698"><a href="#698">698</a></td></tr
><tr id="gr_svn2402_699"

><td id="699"><a href="#699">699</a></td></tr
><tr id="gr_svn2402_700"

><td id="700"><a href="#700">700</a></td></tr
><tr id="gr_svn2402_701"

><td id="701"><a href="#701">701</a></td></tr
><tr id="gr_svn2402_702"

><td id="702"><a href="#702">702</a></td></tr
><tr id="gr_svn2402_703"

><td id="703"><a href="#703">703</a></td></tr
><tr id="gr_svn2402_704"

><td id="704"><a href="#704">704</a></td></tr
><tr id="gr_svn2402_705"

><td id="705"><a href="#705">705</a></td></tr
><tr id="gr_svn2402_706"

><td id="706"><a href="#706">706</a></td></tr
><tr id="gr_svn2402_707"

><td id="707"><a href="#707">707</a></td></tr
><tr id="gr_svn2402_708"

><td id="708"><a href="#708">708</a></td></tr
><tr id="gr_svn2402_709"

><td id="709"><a href="#709">709</a></td></tr
><tr id="gr_svn2402_710"

><td id="710"><a href="#710">710</a></td></tr
><tr id="gr_svn2402_711"

><td id="711"><a href="#711">711</a></td></tr
><tr id="gr_svn2402_712"

><td id="712"><a href="#712">712</a></td></tr
><tr id="gr_svn2402_713"

><td id="713"><a href="#713">713</a></td></tr
><tr id="gr_svn2402_714"

><td id="714"><a href="#714">714</a></td></tr
><tr id="gr_svn2402_715"

><td id="715"><a href="#715">715</a></td></tr
><tr id="gr_svn2402_716"

><td id="716"><a href="#716">716</a></td></tr
><tr id="gr_svn2402_717"

><td id="717"><a href="#717">717</a></td></tr
><tr id="gr_svn2402_718"

><td id="718"><a href="#718">718</a></td></tr
><tr id="gr_svn2402_719"

><td id="719"><a href="#719">719</a></td></tr
><tr id="gr_svn2402_720"

><td id="720"><a href="#720">720</a></td></tr
><tr id="gr_svn2402_721"

><td id="721"><a href="#721">721</a></td></tr
><tr id="gr_svn2402_722"

><td id="722"><a href="#722">722</a></td></tr
><tr id="gr_svn2402_723"

><td id="723"><a href="#723">723</a></td></tr
><tr id="gr_svn2402_724"

><td id="724"><a href="#724">724</a></td></tr
><tr id="gr_svn2402_725"

><td id="725"><a href="#725">725</a></td></tr
><tr id="gr_svn2402_726"

><td id="726"><a href="#726">726</a></td></tr
><tr id="gr_svn2402_727"

><td id="727"><a href="#727">727</a></td></tr
><tr id="gr_svn2402_728"

><td id="728"><a href="#728">728</a></td></tr
><tr id="gr_svn2402_729"

><td id="729"><a href="#729">729</a></td></tr
><tr id="gr_svn2402_730"

><td id="730"><a href="#730">730</a></td></tr
><tr id="gr_svn2402_731"

><td id="731"><a href="#731">731</a></td></tr
><tr id="gr_svn2402_732"

><td id="732"><a href="#732">732</a></td></tr
><tr id="gr_svn2402_733"

><td id="733"><a href="#733">733</a></td></tr
><tr id="gr_svn2402_734"

><td id="734"><a href="#734">734</a></td></tr
><tr id="gr_svn2402_735"

><td id="735"><a href="#735">735</a></td></tr
><tr id="gr_svn2402_736"

><td id="736"><a href="#736">736</a></td></tr
><tr id="gr_svn2402_737"

><td id="737"><a href="#737">737</a></td></tr
><tr id="gr_svn2402_738"

><td id="738"><a href="#738">738</a></td></tr
><tr id="gr_svn2402_739"

><td id="739"><a href="#739">739</a></td></tr
><tr id="gr_svn2402_740"

><td id="740"><a href="#740">740</a></td></tr
><tr id="gr_svn2402_741"

><td id="741"><a href="#741">741</a></td></tr
><tr id="gr_svn2402_742"

><td id="742"><a href="#742">742</a></td></tr
><tr id="gr_svn2402_743"

><td id="743"><a href="#743">743</a></td></tr
><tr id="gr_svn2402_744"

><td id="744"><a href="#744">744</a></td></tr
><tr id="gr_svn2402_745"

><td id="745"><a href="#745">745</a></td></tr
><tr id="gr_svn2402_746"

><td id="746"><a href="#746">746</a></td></tr
><tr id="gr_svn2402_747"

><td id="747"><a href="#747">747</a></td></tr
><tr id="gr_svn2402_748"

><td id="748"><a href="#748">748</a></td></tr
><tr id="gr_svn2402_749"

><td id="749"><a href="#749">749</a></td></tr
><tr id="gr_svn2402_750"

><td id="750"><a href="#750">750</a></td></tr
><tr id="gr_svn2402_751"

><td id="751"><a href="#751">751</a></td></tr
><tr id="gr_svn2402_752"

><td id="752"><a href="#752">752</a></td></tr
><tr id="gr_svn2402_753"

><td id="753"><a href="#753">753</a></td></tr
><tr id="gr_svn2402_754"

><td id="754"><a href="#754">754</a></td></tr
><tr id="gr_svn2402_755"

><td id="755"><a href="#755">755</a></td></tr
><tr id="gr_svn2402_756"

><td id="756"><a href="#756">756</a></td></tr
><tr id="gr_svn2402_757"

><td id="757"><a href="#757">757</a></td></tr
><tr id="gr_svn2402_758"

><td id="758"><a href="#758">758</a></td></tr
><tr id="gr_svn2402_759"

><td id="759"><a href="#759">759</a></td></tr
><tr id="gr_svn2402_760"

><td id="760"><a href="#760">760</a></td></tr
><tr id="gr_svn2402_761"

><td id="761"><a href="#761">761</a></td></tr
><tr id="gr_svn2402_762"

><td id="762"><a href="#762">762</a></td></tr
><tr id="gr_svn2402_763"

><td id="763"><a href="#763">763</a></td></tr
><tr id="gr_svn2402_764"

><td id="764"><a href="#764">764</a></td></tr
><tr id="gr_svn2402_765"

><td id="765"><a href="#765">765</a></td></tr
><tr id="gr_svn2402_766"

><td id="766"><a href="#766">766</a></td></tr
><tr id="gr_svn2402_767"

><td id="767"><a href="#767">767</a></td></tr
><tr id="gr_svn2402_768"

><td id="768"><a href="#768">768</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre class="prettyprint"><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn2402_1

><td class="source">/*<br></td></tr
><tr
id=sl_svn2402_2

><td class="source"> * jQuery UI Draggable @VERSION<br></td></tr
><tr
id=sl_svn2402_3

><td class="source"> *<br></td></tr
><tr
id=sl_svn2402_4

><td class="source"> * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)<br></td></tr
><tr
id=sl_svn2402_5

><td class="source"> * Dual licensed under the MIT (MIT-LICENSE.txt)<br></td></tr
><tr
id=sl_svn2402_6

><td class="source"> * and GPL (GPL-LICENSE.txt) licenses.<br></td></tr
><tr
id=sl_svn2402_7

><td class="source"> *<br></td></tr
><tr
id=sl_svn2402_8

><td class="source"> * http://docs.jquery.com/UI/Draggables<br></td></tr
><tr
id=sl_svn2402_9

><td class="source"> *<br></td></tr
><tr
id=sl_svn2402_10

><td class="source"> * Depends:<br></td></tr
><tr
id=sl_svn2402_11

><td class="source"> *	ui.core.js<br></td></tr
><tr
id=sl_svn2402_12

><td class="source"> */<br></td></tr
><tr
id=sl_svn2402_13

><td class="source">(function($) {<br></td></tr
><tr
id=sl_svn2402_14

><td class="source"><br></td></tr
><tr
id=sl_svn2402_15

><td class="source">$.widget(&quot;ui.draggable&quot;, $.extend({}, $.ui.mouse, {<br></td></tr
><tr
id=sl_svn2402_16

><td class="source"><br></td></tr
><tr
id=sl_svn2402_17

><td class="source">	_init: function() {<br></td></tr
><tr
id=sl_svn2402_18

><td class="source"><br></td></tr
><tr
id=sl_svn2402_19

><td class="source">		if (this.options.helper == &#39;original&#39; &amp;&amp; !(/^(?:r|a|f)/).test(this.element.css(&quot;position&quot;)))<br></td></tr
><tr
id=sl_svn2402_20

><td class="source">			this.element[0].style.position = &#39;relative&#39;;<br></td></tr
><tr
id=sl_svn2402_21

><td class="source"><br></td></tr
><tr
id=sl_svn2402_22

><td class="source">		(this.options.addClasses &amp;&amp; this.element.addClass(&quot;ui-draggable&quot;));<br></td></tr
><tr
id=sl_svn2402_23

><td class="source">		(this.options.disabled &amp;&amp; this.element.addClass(&quot;ui-draggable-disabled&quot;));<br></td></tr
><tr
id=sl_svn2402_24

><td class="source"><br></td></tr
><tr
id=sl_svn2402_25

><td class="source">		this._mouseInit();<br></td></tr
><tr
id=sl_svn2402_26

><td class="source"><br></td></tr
><tr
id=sl_svn2402_27

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_28

><td class="source"><br></td></tr
><tr
id=sl_svn2402_29

><td class="source">	destroy: function() {<br></td></tr
><tr
id=sl_svn2402_30

><td class="source">		if(!this.element.data(&#39;draggable&#39;)) return;<br></td></tr
><tr
id=sl_svn2402_31

><td class="source">		this.element<br></td></tr
><tr
id=sl_svn2402_32

><td class="source">			.removeData(&quot;draggable&quot;)<br></td></tr
><tr
id=sl_svn2402_33

><td class="source">			.unbind(&quot;.draggable&quot;)<br></td></tr
><tr
id=sl_svn2402_34

><td class="source">			.removeClass(&quot;ui-draggable&quot;<br></td></tr
><tr
id=sl_svn2402_35

><td class="source">				+ &quot; ui-draggable-dragging&quot;<br></td></tr
><tr
id=sl_svn2402_36

><td class="source">				+ &quot; ui-draggable-disabled&quot;);<br></td></tr
><tr
id=sl_svn2402_37

><td class="source">		this._mouseDestroy();<br></td></tr
><tr
id=sl_svn2402_38

><td class="source"><br></td></tr
><tr
id=sl_svn2402_39

><td class="source">		return this;<br></td></tr
><tr
id=sl_svn2402_40

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_41

><td class="source"><br></td></tr
><tr
id=sl_svn2402_42

><td class="source">	_mouseCapture: function(event) {<br></td></tr
><tr
id=sl_svn2402_43

><td class="source"><br></td></tr
><tr
id=sl_svn2402_44

><td class="source">		var o = this.options;<br></td></tr
><tr
id=sl_svn2402_45

><td class="source"><br></td></tr
><tr
id=sl_svn2402_46

><td class="source">		if (this.helper || o.disabled || $(event.target).is(&#39;.ui-resizable-handle&#39;))<br></td></tr
><tr
id=sl_svn2402_47

><td class="source">			return false;<br></td></tr
><tr
id=sl_svn2402_48

><td class="source"><br></td></tr
><tr
id=sl_svn2402_49

><td class="source">		//Quit if we&#39;re not on a valid handle<br></td></tr
><tr
id=sl_svn2402_50

><td class="source">		this.handle = this._getHandle(event);<br></td></tr
><tr
id=sl_svn2402_51

><td class="source">		if (!this.handle)<br></td></tr
><tr
id=sl_svn2402_52

><td class="source">			return false;<br></td></tr
><tr
id=sl_svn2402_53

><td class="source"><br></td></tr
><tr
id=sl_svn2402_54

><td class="source">		return true;<br></td></tr
><tr
id=sl_svn2402_55

><td class="source"><br></td></tr
><tr
id=sl_svn2402_56

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_57

><td class="source"><br></td></tr
><tr
id=sl_svn2402_58

><td class="source">	_mouseStart: function(event) {<br></td></tr
><tr
id=sl_svn2402_59

><td class="source"><br></td></tr
><tr
id=sl_svn2402_60

><td class="source">		var o = this.options;<br></td></tr
><tr
id=sl_svn2402_61

><td class="source"><br></td></tr
><tr
id=sl_svn2402_62

><td class="source">		//Create and append the visible helper<br></td></tr
><tr
id=sl_svn2402_63

><td class="source">		this.helper = this._createHelper(event);<br></td></tr
><tr
id=sl_svn2402_64

><td class="source"><br></td></tr
><tr
id=sl_svn2402_65

><td class="source">		//Cache the helper size<br></td></tr
><tr
id=sl_svn2402_66

><td class="source">		this._cacheHelperProportions();<br></td></tr
><tr
id=sl_svn2402_67

><td class="source"><br></td></tr
><tr
id=sl_svn2402_68

><td class="source">		//If ddmanager is used for droppables, set the global draggable<br></td></tr
><tr
id=sl_svn2402_69

><td class="source">		if($.ui.ddmanager)<br></td></tr
><tr
id=sl_svn2402_70

><td class="source">			$.ui.ddmanager.current = this;<br></td></tr
><tr
id=sl_svn2402_71

><td class="source"><br></td></tr
><tr
id=sl_svn2402_72

><td class="source">		/*<br></td></tr
><tr
id=sl_svn2402_73

><td class="source">		 * - Position generation -<br></td></tr
><tr
id=sl_svn2402_74

><td class="source">		 * This block generates everything position related - it&#39;s the core of draggables.<br></td></tr
><tr
id=sl_svn2402_75

><td class="source">		 */<br></td></tr
><tr
id=sl_svn2402_76

><td class="source"><br></td></tr
><tr
id=sl_svn2402_77

><td class="source">		//Cache the margins of the original element<br></td></tr
><tr
id=sl_svn2402_78

><td class="source">		this._cacheMargins();<br></td></tr
><tr
id=sl_svn2402_79

><td class="source"><br></td></tr
><tr
id=sl_svn2402_80

><td class="source">		//Store the helper&#39;s css position<br></td></tr
><tr
id=sl_svn2402_81

><td class="source">		this.cssPosition = this.helper.css(&quot;position&quot;);<br></td></tr
><tr
id=sl_svn2402_82

><td class="source">		this.scrollParent = this.helper.scrollParent();<br></td></tr
><tr
id=sl_svn2402_83

><td class="source"><br></td></tr
><tr
id=sl_svn2402_84

><td class="source">		//The element&#39;s absolute position on the page minus margins<br></td></tr
><tr
id=sl_svn2402_85

><td class="source">		this.offset = this.element.offset();<br></td></tr
><tr
id=sl_svn2402_86

><td class="source">		this.offset = {<br></td></tr
><tr
id=sl_svn2402_87

><td class="source">			top: this.offset.top - this.margins.top,<br></td></tr
><tr
id=sl_svn2402_88

><td class="source">			left: this.offset.left - this.margins.left<br></td></tr
><tr
id=sl_svn2402_89

><td class="source">		};<br></td></tr
><tr
id=sl_svn2402_90

><td class="source"><br></td></tr
><tr
id=sl_svn2402_91

><td class="source">		$.extend(this.offset, {<br></td></tr
><tr
id=sl_svn2402_92

><td class="source">			click: { //Where the click happened, relative to the element<br></td></tr
><tr
id=sl_svn2402_93

><td class="source">				left: event.pageX - this.offset.left,<br></td></tr
><tr
id=sl_svn2402_94

><td class="source">				top: event.pageY - this.offset.top<br></td></tr
><tr
id=sl_svn2402_95

><td class="source">			},<br></td></tr
><tr
id=sl_svn2402_96

><td class="source">			parent: this._getParentOffset(),<br></td></tr
><tr
id=sl_svn2402_97

><td class="source">			relative: this._getRelativeOffset() //This is a relative to absolute position minus the actual position calculation - only used for relative positioned helper<br></td></tr
><tr
id=sl_svn2402_98

><td class="source">		});<br></td></tr
><tr
id=sl_svn2402_99

><td class="source"><br></td></tr
><tr
id=sl_svn2402_100

><td class="source">		//Generate the original position<br></td></tr
><tr
id=sl_svn2402_101

><td class="source">		this.originalPosition = this._generatePosition(event);<br></td></tr
><tr
id=sl_svn2402_102

><td class="source">		this.originalPageX = event.pageX;<br></td></tr
><tr
id=sl_svn2402_103

><td class="source">		this.originalPageY = event.pageY;<br></td></tr
><tr
id=sl_svn2402_104

><td class="source"><br></td></tr
><tr
id=sl_svn2402_105

><td class="source">		//Adjust the mouse offset relative to the helper if &#39;cursorAt&#39; is supplied<br></td></tr
><tr
id=sl_svn2402_106

><td class="source">		if(o.cursorAt)<br></td></tr
><tr
id=sl_svn2402_107

><td class="source">			this._adjustOffsetFromHelper(o.cursorAt);<br></td></tr
><tr
id=sl_svn2402_108

><td class="source"><br></td></tr
><tr
id=sl_svn2402_109

><td class="source">		//Set a containment if given in the options<br></td></tr
><tr
id=sl_svn2402_110

><td class="source">		if(o.containment)<br></td></tr
><tr
id=sl_svn2402_111

><td class="source">			this._setContainment();<br></td></tr
><tr
id=sl_svn2402_112

><td class="source"><br></td></tr
><tr
id=sl_svn2402_113

><td class="source">		//Call plugins and callbacks<br></td></tr
><tr
id=sl_svn2402_114

><td class="source">		this._trigger(&quot;start&quot;, event);<br></td></tr
><tr
id=sl_svn2402_115

><td class="source"><br></td></tr
><tr
id=sl_svn2402_116

><td class="source">		//Recache the helper size<br></td></tr
><tr
id=sl_svn2402_117

><td class="source">		this._cacheHelperProportions();<br></td></tr
><tr
id=sl_svn2402_118

><td class="source"><br></td></tr
><tr
id=sl_svn2402_119

><td class="source">		//Prepare the droppable offsets<br></td></tr
><tr
id=sl_svn2402_120

><td class="source">		if ($.ui.ddmanager &amp;&amp; !o.dropBehaviour)<br></td></tr
><tr
id=sl_svn2402_121

><td class="source">			$.ui.ddmanager.prepareOffsets(this, event);<br></td></tr
><tr
id=sl_svn2402_122

><td class="source"><br></td></tr
><tr
id=sl_svn2402_123

><td class="source">		this.helper.addClass(&quot;ui-draggable-dragging&quot;);<br></td></tr
><tr
id=sl_svn2402_124

><td class="source">		this._mouseDrag(event, true); //Execute the drag once - this causes the helper not to be visible before getting its correct position<br></td></tr
><tr
id=sl_svn2402_125

><td class="source">		return true;<br></td></tr
><tr
id=sl_svn2402_126

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_127

><td class="source"><br></td></tr
><tr
id=sl_svn2402_128

><td class="source">	_mouseDrag: function(event, noPropagation) {<br></td></tr
><tr
id=sl_svn2402_129

><td class="source"><br></td></tr
><tr
id=sl_svn2402_130

><td class="source">		//Compute the helpers position<br></td></tr
><tr
id=sl_svn2402_131

><td class="source">		this.position = this._generatePosition(event);<br></td></tr
><tr
id=sl_svn2402_132

><td class="source">		this.positionAbs = this._convertPositionTo(&quot;absolute&quot;);<br></td></tr
><tr
id=sl_svn2402_133

><td class="source"><br></td></tr
><tr
id=sl_svn2402_134

><td class="source">		//Call plugins and callbacks and use the resulting position if something is returned<br></td></tr
><tr
id=sl_svn2402_135

><td class="source">		if (!noPropagation) {<br></td></tr
><tr
id=sl_svn2402_136

><td class="source">			var ui = this._uiHash();<br></td></tr
><tr
id=sl_svn2402_137

><td class="source">			this._trigger(&#39;drag&#39;, event, ui);<br></td></tr
><tr
id=sl_svn2402_138

><td class="source">			this.position = ui.position;<br></td></tr
><tr
id=sl_svn2402_139

><td class="source">		}<br></td></tr
><tr
id=sl_svn2402_140

><td class="source"><br></td></tr
><tr
id=sl_svn2402_141

><td class="source">		if(!this.options.axis || this.options.axis != &quot;y&quot;) this.helper[0].style.left = this.position.left+&#39;px&#39;;<br></td></tr
><tr
id=sl_svn2402_142

><td class="source">		if(!this.options.axis || this.options.axis != &quot;x&quot;) this.helper[0].style.top = this.position.top+&#39;px&#39;;<br></td></tr
><tr
id=sl_svn2402_143

><td class="source">		if($.ui.ddmanager) $.ui.ddmanager.drag(this, event);<br></td></tr
><tr
id=sl_svn2402_144

><td class="source"><br></td></tr
><tr
id=sl_svn2402_145

><td class="source">		return false;<br></td></tr
><tr
id=sl_svn2402_146

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_147

><td class="source"><br></td></tr
><tr
id=sl_svn2402_148

><td class="source">	_mouseStop: function(event) {<br></td></tr
><tr
id=sl_svn2402_149

><td class="source"><br></td></tr
><tr
id=sl_svn2402_150

><td class="source">		//If we are using droppables, inform the manager about the drop<br></td></tr
><tr
id=sl_svn2402_151

><td class="source">		var dropped = false;<br></td></tr
><tr
id=sl_svn2402_152

><td class="source">		if ($.ui.ddmanager &amp;&amp; !this.options.dropBehaviour)<br></td></tr
><tr
id=sl_svn2402_153

><td class="source">			dropped = $.ui.ddmanager.drop(this, event);<br></td></tr
><tr
id=sl_svn2402_154

><td class="source"><br></td></tr
><tr
id=sl_svn2402_155

><td class="source">		//if a drop comes from outside (a sortable)<br></td></tr
><tr
id=sl_svn2402_156

><td class="source">		if(this.dropped) {<br></td></tr
><tr
id=sl_svn2402_157

><td class="source">			dropped = this.dropped;<br></td></tr
><tr
id=sl_svn2402_158

><td class="source">			this.dropped = false;<br></td></tr
><tr
id=sl_svn2402_159

><td class="source">		}<br></td></tr
><tr
id=sl_svn2402_160

><td class="source"><br></td></tr
><tr
id=sl_svn2402_161

><td class="source">		if((this.options.revert == &quot;invalid&quot; &amp;&amp; !dropped) || (this.options.revert == &quot;valid&quot; &amp;&amp; dropped) || this.options.revert === true || ($.isFunction(this.options.revert) &amp;&amp; this.options.revert.call(this.element, dropped))) {<br></td></tr
><tr
id=sl_svn2402_162

><td class="source">			var self = this;<br></td></tr
><tr
id=sl_svn2402_163

><td class="source">			$(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {<br></td></tr
><tr
id=sl_svn2402_164

><td class="source">				self._trigger(&quot;stop&quot;, event);<br></td></tr
><tr
id=sl_svn2402_165

><td class="source">				self._clear();<br></td></tr
><tr
id=sl_svn2402_166

><td class="source">			});<br></td></tr
><tr
id=sl_svn2402_167

><td class="source">		} else {<br></td></tr
><tr
id=sl_svn2402_168

><td class="source">			this._trigger(&quot;stop&quot;, event);<br></td></tr
><tr
id=sl_svn2402_169

><td class="source">			this._clear();<br></td></tr
><tr
id=sl_svn2402_170

><td class="source">		}<br></td></tr
><tr
id=sl_svn2402_171

><td class="source"><br></td></tr
><tr
id=sl_svn2402_172

><td class="source">		return false;<br></td></tr
><tr
id=sl_svn2402_173

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_174

><td class="source"><br></td></tr
><tr
id=sl_svn2402_175

><td class="source">	_getHandle: function(event) {<br></td></tr
><tr
id=sl_svn2402_176

><td class="source"><br></td></tr
><tr
id=sl_svn2402_177

><td class="source">		var handle = !this.options.handle || !$(this.options.handle, this.element).length ? true : false;<br></td></tr
><tr
id=sl_svn2402_178

><td class="source">		$(this.options.handle, this.element)<br></td></tr
><tr
id=sl_svn2402_179

><td class="source">			.find(&quot;*&quot;)<br></td></tr
><tr
id=sl_svn2402_180

><td class="source">			.andSelf()<br></td></tr
><tr
id=sl_svn2402_181

><td class="source">			.each(function() {<br></td></tr
><tr
id=sl_svn2402_182

><td class="source">				if(this == event.target) handle = true;<br></td></tr
><tr
id=sl_svn2402_183

><td class="source">			});<br></td></tr
><tr
id=sl_svn2402_184

><td class="source"><br></td></tr
><tr
id=sl_svn2402_185

><td class="source">		return handle;<br></td></tr
><tr
id=sl_svn2402_186

><td class="source"><br></td></tr
><tr
id=sl_svn2402_187

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_188

><td class="source"><br></td></tr
><tr
id=sl_svn2402_189

><td class="source">	_createHelper: function(event) {<br></td></tr
><tr
id=sl_svn2402_190

><td class="source"><br></td></tr
><tr
id=sl_svn2402_191

><td class="source">		var o = this.options;<br></td></tr
><tr
id=sl_svn2402_192

><td class="source">		var helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event])) : (o.helper == &#39;clone&#39; ? this.element.clone() : this.element);<br></td></tr
><tr
id=sl_svn2402_193

><td class="source"><br></td></tr
><tr
id=sl_svn2402_194

><td class="source">		if(!helper.parents(&#39;body&#39;).length)<br></td></tr
><tr
id=sl_svn2402_195

><td class="source">			helper.appendTo((o.appendTo == &#39;parent&#39; ? this.element[0].parentNode : o.appendTo));<br></td></tr
><tr
id=sl_svn2402_196

><td class="source"><br></td></tr
><tr
id=sl_svn2402_197

><td class="source">		if(helper[0] != this.element[0] &amp;&amp; !(/(fixed|absolute)/).test(helper.css(&quot;position&quot;)))<br></td></tr
><tr
id=sl_svn2402_198

><td class="source">			helper.css(&quot;position&quot;, &quot;absolute&quot;);<br></td></tr
><tr
id=sl_svn2402_199

><td class="source"><br></td></tr
><tr
id=sl_svn2402_200

><td class="source">		return helper;<br></td></tr
><tr
id=sl_svn2402_201

><td class="source"><br></td></tr
><tr
id=sl_svn2402_202

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_203

><td class="source"><br></td></tr
><tr
id=sl_svn2402_204

><td class="source">	_adjustOffsetFromHelper: function(obj) {<br></td></tr
><tr
id=sl_svn2402_205

><td class="source">		if(obj.left != undefined) this.offset.click.left = obj.left + this.margins.left;<br></td></tr
><tr
id=sl_svn2402_206

><td class="source">		if(obj.right != undefined) this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;<br></td></tr
><tr
id=sl_svn2402_207

><td class="source">		if(obj.top != undefined) this.offset.click.top = obj.top + this.margins.top;<br></td></tr
><tr
id=sl_svn2402_208

><td class="source">		if(obj.bottom != undefined) this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;<br></td></tr
><tr
id=sl_svn2402_209

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_210

><td class="source"><br></td></tr
><tr
id=sl_svn2402_211

><td class="source">	_getParentOffset: function() {<br></td></tr
><tr
id=sl_svn2402_212

><td class="source"><br></td></tr
><tr
id=sl_svn2402_213

><td class="source">		//Get the offsetParent and cache its position<br></td></tr
><tr
id=sl_svn2402_214

><td class="source">		this.offsetParent = this.helper.offsetParent();<br></td></tr
><tr
id=sl_svn2402_215

><td class="source">		var po = this.offsetParent.offset();<br></td></tr
><tr
id=sl_svn2402_216

><td class="source"><br></td></tr
><tr
id=sl_svn2402_217

><td class="source">		// This is a special case where we need to modify a offset calculated on start, since the following happened:<br></td></tr
><tr
id=sl_svn2402_218

><td class="source">		// 1. The position of the helper is absolute, so it&#39;s position is calculated based on the next positioned parent<br></td></tr
><tr
id=sl_svn2402_219

><td class="source">		// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn&#39;t the document, which means that<br></td></tr
><tr
id=sl_svn2402_220

><td class="source">		//    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag<br></td></tr
><tr
id=sl_svn2402_221

><td class="source">		if(this.cssPosition == &#39;absolute&#39; &amp;&amp; this.scrollParent[0] != document &amp;&amp; $.ui.contains(this.scrollParent[0], this.offsetParent[0])) {<br></td></tr
><tr
id=sl_svn2402_222

><td class="source">			po.left += this.scrollParent.scrollLeft();<br></td></tr
><tr
id=sl_svn2402_223

><td class="source">			po.top += this.scrollParent.scrollTop();<br></td></tr
><tr
id=sl_svn2402_224

><td class="source">		}<br></td></tr
><tr
id=sl_svn2402_225

><td class="source"><br></td></tr
><tr
id=sl_svn2402_226

><td class="source">		if((this.offsetParent[0] == document.body) //This needs to be actually done for all browsers, since pageX/pageY includes this information<br></td></tr
><tr
id=sl_svn2402_227

><td class="source">		|| (this.offsetParent[0].tagName &amp;&amp; this.offsetParent[0].tagName.toLowerCase() == &#39;html&#39; &amp;&amp; $.browser.msie)) //Ugly IE fix<br></td></tr
><tr
id=sl_svn2402_228

><td class="source">			po = { top: 0, left: 0 };<br></td></tr
><tr
id=sl_svn2402_229

><td class="source"><br></td></tr
><tr
id=sl_svn2402_230

><td class="source">		return {<br></td></tr
><tr
id=sl_svn2402_231

><td class="source">			top: po.top + (parseInt(this.offsetParent.css(&quot;borderTopWidth&quot;),10) || 0),<br></td></tr
><tr
id=sl_svn2402_232

><td class="source">			left: po.left + (parseInt(this.offsetParent.css(&quot;borderLeftWidth&quot;),10) || 0)<br></td></tr
><tr
id=sl_svn2402_233

><td class="source">		};<br></td></tr
><tr
id=sl_svn2402_234

><td class="source"><br></td></tr
><tr
id=sl_svn2402_235

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_236

><td class="source"><br></td></tr
><tr
id=sl_svn2402_237

><td class="source">	_getRelativeOffset: function() {<br></td></tr
><tr
id=sl_svn2402_238

><td class="source"><br></td></tr
><tr
id=sl_svn2402_239

><td class="source">		if(this.cssPosition == &quot;relative&quot;) {<br></td></tr
><tr
id=sl_svn2402_240

><td class="source">			var p = this.element.position();<br></td></tr
><tr
id=sl_svn2402_241

><td class="source">			return {<br></td></tr
><tr
id=sl_svn2402_242

><td class="source">				top: p.top - (parseInt(this.helper.css(&quot;top&quot;),10) || 0) + this.scrollParent.scrollTop(),<br></td></tr
><tr
id=sl_svn2402_243

><td class="source">				left: p.left - (parseInt(this.helper.css(&quot;left&quot;),10) || 0) + this.scrollParent.scrollLeft()<br></td></tr
><tr
id=sl_svn2402_244

><td class="source">			};<br></td></tr
><tr
id=sl_svn2402_245

><td class="source">		} else {<br></td></tr
><tr
id=sl_svn2402_246

><td class="source">			return { top: 0, left: 0 };<br></td></tr
><tr
id=sl_svn2402_247

><td class="source">		}<br></td></tr
><tr
id=sl_svn2402_248

><td class="source"><br></td></tr
><tr
id=sl_svn2402_249

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_250

><td class="source"><br></td></tr
><tr
id=sl_svn2402_251

><td class="source">	_cacheMargins: function() {<br></td></tr
><tr
id=sl_svn2402_252

><td class="source">		this.margins = {<br></td></tr
><tr
id=sl_svn2402_253

><td class="source">			left: (parseInt(this.element.css(&quot;marginLeft&quot;),10) || 0),<br></td></tr
><tr
id=sl_svn2402_254

><td class="source">			top: (parseInt(this.element.css(&quot;marginTop&quot;),10) || 0)<br></td></tr
><tr
id=sl_svn2402_255

><td class="source">		};<br></td></tr
><tr
id=sl_svn2402_256

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_257

><td class="source"><br></td></tr
><tr
id=sl_svn2402_258

><td class="source">	_cacheHelperProportions: function() {<br></td></tr
><tr
id=sl_svn2402_259

><td class="source">		this.helperProportions = {<br></td></tr
><tr
id=sl_svn2402_260

><td class="source">			width: this.helper.outerWidth(),<br></td></tr
><tr
id=sl_svn2402_261

><td class="source">			height: this.helper.outerHeight()<br></td></tr
><tr
id=sl_svn2402_262

><td class="source">		};<br></td></tr
><tr
id=sl_svn2402_263

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_264

><td class="source"><br></td></tr
><tr
id=sl_svn2402_265

><td class="source">	_setContainment: function() {<br></td></tr
><tr
id=sl_svn2402_266

><td class="source"><br></td></tr
><tr
id=sl_svn2402_267

><td class="source">		var o = this.options;<br></td></tr
><tr
id=sl_svn2402_268

><td class="source">		if(o.containment == &#39;parent&#39;) o.containment = this.helper[0].parentNode;<br></td></tr
><tr
id=sl_svn2402_269

><td class="source">		if(o.containment == &#39;document&#39; || o.containment == &#39;window&#39;) this.containment = [<br></td></tr
><tr
id=sl_svn2402_270

><td class="source">			0 - this.offset.relative.left - this.offset.parent.left,<br></td></tr
><tr
id=sl_svn2402_271

><td class="source">			0 - this.offset.relative.top - this.offset.parent.top,<br></td></tr
><tr
id=sl_svn2402_272

><td class="source">			$(o.containment == &#39;document&#39; ? document : window).width() - this.helperProportions.width - this.margins.left,<br></td></tr
><tr
id=sl_svn2402_273

><td class="source">			($(o.containment == &#39;document&#39; ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top<br></td></tr
><tr
id=sl_svn2402_274

><td class="source">		];<br></td></tr
><tr
id=sl_svn2402_275

><td class="source"><br></td></tr
><tr
id=sl_svn2402_276

><td class="source">		if(!(/^(document|window|parent)$/).test(o.containment) &amp;&amp; o.containment.constructor != Array) {<br></td></tr
><tr
id=sl_svn2402_277

><td class="source">			var ce = $(o.containment)[0]; if(!ce) return;<br></td></tr
><tr
id=sl_svn2402_278

><td class="source">			var co = $(o.containment).offset();<br></td></tr
><tr
id=sl_svn2402_279

><td class="source">			var over = ($(ce).css(&quot;overflow&quot;) != &#39;hidden&#39;);<br></td></tr
><tr
id=sl_svn2402_280

><td class="source"><br></td></tr
><tr
id=sl_svn2402_281

><td class="source">			this.containment = [<br></td></tr
><tr
id=sl_svn2402_282

><td class="source">				co.left + (parseInt($(ce).css(&quot;borderLeftWidth&quot;),10) || 0) + (parseInt($(ce).css(&quot;paddingLeft&quot;),10) || 0) - this.margins.left,<br></td></tr
><tr
id=sl_svn2402_283

><td class="source">				co.top + (parseInt($(ce).css(&quot;borderTopWidth&quot;),10) || 0) + (parseInt($(ce).css(&quot;paddingTop&quot;),10) || 0) - this.margins.top,<br></td></tr
><tr
id=sl_svn2402_284

><td class="source">				co.left+(over ? Math.max(ce.scrollWidth,ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css(&quot;borderLeftWidth&quot;),10) || 0) - (parseInt($(ce).css(&quot;paddingRight&quot;),10) || 0) - this.helperProportions.width - this.margins.left,<br></td></tr
><tr
id=sl_svn2402_285

><td class="source">				co.top+(over ? Math.max(ce.scrollHeight,ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css(&quot;borderTopWidth&quot;),10) || 0) - (parseInt($(ce).css(&quot;paddingBottom&quot;),10) || 0) - this.helperProportions.height - this.margins.top<br></td></tr
><tr
id=sl_svn2402_286

><td class="source">			];<br></td></tr
><tr
id=sl_svn2402_287

><td class="source">		} else if(o.containment.constructor == Array) {<br></td></tr
><tr
id=sl_svn2402_288

><td class="source">			this.containment = o.containment;<br></td></tr
><tr
id=sl_svn2402_289

><td class="source">		}<br></td></tr
><tr
id=sl_svn2402_290

><td class="source"><br></td></tr
><tr
id=sl_svn2402_291

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_292

><td class="source"><br></td></tr
><tr
id=sl_svn2402_293

><td class="source">	_convertPositionTo: function(d, pos) {<br></td></tr
><tr
id=sl_svn2402_294

><td class="source"><br></td></tr
><tr
id=sl_svn2402_295

><td class="source">		if(!pos) pos = this.position;<br></td></tr
><tr
id=sl_svn2402_296

><td class="source">		var mod = d == &quot;absolute&quot; ? 1 : -1;<br></td></tr
><tr
id=sl_svn2402_297

><td class="source">		var o = this.options, scroll = this.cssPosition == &#39;absolute&#39; &amp;&amp; !(this.scrollParent[0] != document &amp;&amp; $.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);<br></td></tr
><tr
id=sl_svn2402_298

><td class="source"><br></td></tr
><tr
id=sl_svn2402_299

><td class="source">		return {<br></td></tr
><tr
id=sl_svn2402_300

><td class="source">			top: (<br></td></tr
><tr
id=sl_svn2402_301

><td class="source">				pos.top																	// The absolute mouse position<br></td></tr
><tr
id=sl_svn2402_302

><td class="source">				+ this.offset.relative.top * mod										// Only for relative positioned nodes: Relative offset from element to offset parent<br></td></tr
><tr
id=sl_svn2402_303

><td class="source">				+ this.offset.parent.top * mod											// The offsetParent&#39;s offset without borders (offset + border)<br></td></tr
><tr
id=sl_svn2402_304

><td class="source">				- ($.browser.safari &amp;&amp; this.cssPosition == &#39;fixed&#39; ? 0 : ( this.cssPosition == &#39;fixed&#39; ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) * mod)<br></td></tr
><tr
id=sl_svn2402_305

><td class="source">			),<br></td></tr
><tr
id=sl_svn2402_306

><td class="source">			left: (<br></td></tr
><tr
id=sl_svn2402_307

><td class="source">				pos.left																// The absolute mouse position<br></td></tr
><tr
id=sl_svn2402_308

><td class="source">				+ this.offset.relative.left * mod										// Only for relative positioned nodes: Relative offset from element to offset parent<br></td></tr
><tr
id=sl_svn2402_309

><td class="source">				+ this.offset.parent.left * mod											// The offsetParent&#39;s offset without borders (offset + border)<br></td></tr
><tr
id=sl_svn2402_310

><td class="source">				- ($.browser.safari &amp;&amp; this.cssPosition == &#39;fixed&#39; ? 0 : ( this.cssPosition == &#39;fixed&#39; ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ) * mod)<br></td></tr
><tr
id=sl_svn2402_311

><td class="source">			)<br></td></tr
><tr
id=sl_svn2402_312

><td class="source">		};<br></td></tr
><tr
id=sl_svn2402_313

><td class="source"><br></td></tr
><tr
id=sl_svn2402_314

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_315

><td class="source"><br></td></tr
><tr
id=sl_svn2402_316

><td class="source">	_generatePosition: function(event) {<br></td></tr
><tr
id=sl_svn2402_317

><td class="source"><br></td></tr
><tr
id=sl_svn2402_318

><td class="source">		var o = this.options, scroll = this.cssPosition == &#39;absolute&#39; &amp;&amp; !(this.scrollParent[0] != document &amp;&amp; $.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);<br></td></tr
><tr
id=sl_svn2402_319

><td class="source"><br></td></tr
><tr
id=sl_svn2402_320

><td class="source">		// This is another very weird special case that only happens for relative elements:<br></td></tr
><tr
id=sl_svn2402_321

><td class="source">		// 1. If the css position is relative<br></td></tr
><tr
id=sl_svn2402_322

><td class="source">		// 2. and the scroll parent is the document or similar to the offset parent<br></td></tr
><tr
id=sl_svn2402_323

><td class="source">		// we have to refresh the relative offset during the scroll so there are no jumps<br></td></tr
><tr
id=sl_svn2402_324

><td class="source">		if(this.cssPosition == &#39;relative&#39; &amp;&amp; !(this.scrollParent[0] != document &amp;&amp; this.scrollParent[0] != this.offsetParent[0])) {<br></td></tr
><tr
id=sl_svn2402_325

><td class="source">			this.offset.relative = this._getRelativeOffset();<br></td></tr
><tr
id=sl_svn2402_326

><td class="source">		}<br></td></tr
><tr
id=sl_svn2402_327

><td class="source"><br></td></tr
><tr
id=sl_svn2402_328

><td class="source">		var pageX = event.pageX;<br></td></tr
><tr
id=sl_svn2402_329

><td class="source">		var pageY = event.pageY;<br></td></tr
><tr
id=sl_svn2402_330

><td class="source"><br></td></tr
><tr
id=sl_svn2402_331

><td class="source">		/*<br></td></tr
><tr
id=sl_svn2402_332

><td class="source">		 * - Position constraining -<br></td></tr
><tr
id=sl_svn2402_333

><td class="source">		 * Constrain the position to a mix of grid, containment.<br></td></tr
><tr
id=sl_svn2402_334

><td class="source">		 */<br></td></tr
><tr
id=sl_svn2402_335

><td class="source"><br></td></tr
><tr
id=sl_svn2402_336

><td class="source">		if(this.originalPosition) { //If we are not dragging yet, we won&#39;t check for options<br></td></tr
><tr
id=sl_svn2402_337

><td class="source"><br></td></tr
><tr
id=sl_svn2402_338

><td class="source">			if(this.containment) {<br></td></tr
><tr
id=sl_svn2402_339

><td class="source">				if(event.pageX - this.offset.click.left &lt; this.containment[0]) pageX = this.containment[0] + this.offset.click.left;<br></td></tr
><tr
id=sl_svn2402_340

><td class="source">				if(event.pageY - this.offset.click.top &lt; this.containment[1]) pageY = this.containment[1] + this.offset.click.top;<br></td></tr
><tr
id=sl_svn2402_341

><td class="source">				if(event.pageX - this.offset.click.left &gt; this.containment[2]) pageX = this.containment[2] + this.offset.click.left;<br></td></tr
><tr
id=sl_svn2402_342

><td class="source">				if(event.pageY - this.offset.click.top &gt; this.containment[3]) pageY = this.containment[3] + this.offset.click.top;<br></td></tr
><tr
id=sl_svn2402_343

><td class="source">			}<br></td></tr
><tr
id=sl_svn2402_344

><td class="source"><br></td></tr
><tr
id=sl_svn2402_345

><td class="source">			if(o.grid) {<br></td></tr
><tr
id=sl_svn2402_346

><td class="source">				var top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1];<br></td></tr
><tr
id=sl_svn2402_347

><td class="source">				pageY = this.containment ? (!(top - this.offset.click.top &lt; this.containment[1] || top - this.offset.click.top &gt; this.containment[3]) ? top : (!(top - this.offset.click.top &lt; this.containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;<br></td></tr
><tr
id=sl_svn2402_348

><td class="source"><br></td></tr
><tr
id=sl_svn2402_349

><td class="source">				var left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0];<br></td></tr
><tr
id=sl_svn2402_350

><td class="source">				pageX = this.containment ? (!(left - this.offset.click.left &lt; this.containment[0] || left - this.offset.click.left &gt; this.containment[2]) ? left : (!(left - this.offset.click.left &lt; this.containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;<br></td></tr
><tr
id=sl_svn2402_351

><td class="source">			}<br></td></tr
><tr
id=sl_svn2402_352

><td class="source"><br></td></tr
><tr
id=sl_svn2402_353

><td class="source">		}<br></td></tr
><tr
id=sl_svn2402_354

><td class="source"><br></td></tr
><tr
id=sl_svn2402_355

><td class="source">		return {<br></td></tr
><tr
id=sl_svn2402_356

><td class="source">			top: (<br></td></tr
><tr
id=sl_svn2402_357

><td class="source">				pageY																// The absolute mouse position<br></td></tr
><tr
id=sl_svn2402_358

><td class="source">				- this.offset.click.top													// Click offset (relative to the element)<br></td></tr
><tr
id=sl_svn2402_359

><td class="source">				- this.offset.relative.top												// Only for relative positioned nodes: Relative offset from element to offset parent<br></td></tr
><tr
id=sl_svn2402_360

><td class="source">				- this.offset.parent.top												// The offsetParent&#39;s offset without borders (offset + border)<br></td></tr
><tr
id=sl_svn2402_361

><td class="source">				+ ($.browser.safari &amp;&amp; this.cssPosition == &#39;fixed&#39; ? 0 : ( this.cssPosition == &#39;fixed&#39; ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ))<br></td></tr
><tr
id=sl_svn2402_362

><td class="source">			),<br></td></tr
><tr
id=sl_svn2402_363

><td class="source">			left: (<br></td></tr
><tr
id=sl_svn2402_364

><td class="source">				pageX																// The absolute mouse position<br></td></tr
><tr
id=sl_svn2402_365

><td class="source">				- this.offset.click.left												// Click offset (relative to the element)<br></td></tr
><tr
id=sl_svn2402_366

><td class="source">				- this.offset.relative.left												// Only for relative positioned nodes: Relative offset from element to offset parent<br></td></tr
><tr
id=sl_svn2402_367

><td class="source">				- this.offset.parent.left												// The offsetParent&#39;s offset without borders (offset + border)<br></td></tr
><tr
id=sl_svn2402_368

><td class="source">				+ ($.browser.safari &amp;&amp; this.cssPosition == &#39;fixed&#39; ? 0 : ( this.cssPosition == &#39;fixed&#39; ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ))<br></td></tr
><tr
id=sl_svn2402_369

><td class="source">			)<br></td></tr
><tr
id=sl_svn2402_370

><td class="source">		};<br></td></tr
><tr
id=sl_svn2402_371

><td class="source"><br></td></tr
><tr
id=sl_svn2402_372

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_373

><td class="source"><br></td></tr
><tr
id=sl_svn2402_374

><td class="source">	_clear: function() {<br></td></tr
><tr
id=sl_svn2402_375

><td class="source">		this.helper.removeClass(&quot;ui-draggable-dragging&quot;);<br></td></tr
><tr
id=sl_svn2402_376

><td class="source">		if(this.helper[0] != this.element[0] &amp;&amp; !this.cancelHelperRemoval) this.helper.remove();<br></td></tr
><tr
id=sl_svn2402_377

><td class="source">		//if($.ui.ddmanager) $.ui.ddmanager.current = null;<br></td></tr
><tr
id=sl_svn2402_378

><td class="source">		this.helper = null;<br></td></tr
><tr
id=sl_svn2402_379

><td class="source">		this.cancelHelperRemoval = false;<br></td></tr
><tr
id=sl_svn2402_380

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_381

><td class="source"><br></td></tr
><tr
id=sl_svn2402_382

><td class="source">	// From now on bulk stuff - mainly helpers<br></td></tr
><tr
id=sl_svn2402_383

><td class="source"><br></td></tr
><tr
id=sl_svn2402_384

><td class="source">	_trigger: function(type, event, ui) {<br></td></tr
><tr
id=sl_svn2402_385

><td class="source">		ui = ui || this._uiHash();<br></td></tr
><tr
id=sl_svn2402_386

><td class="source">		$.ui.plugin.call(this, type, [event, ui]);<br></td></tr
><tr
id=sl_svn2402_387

><td class="source">		if(type == &quot;drag&quot;) this.positionAbs = this._convertPositionTo(&quot;absolute&quot;); //The absolute position has to be recalculated after plugins<br></td></tr
><tr
id=sl_svn2402_388

><td class="source">		return $.widget.prototype._trigger.call(this, type, event, ui);<br></td></tr
><tr
id=sl_svn2402_389

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_390

><td class="source"><br></td></tr
><tr
id=sl_svn2402_391

><td class="source">	plugins: {},<br></td></tr
><tr
id=sl_svn2402_392

><td class="source"><br></td></tr
><tr
id=sl_svn2402_393

><td class="source">	_uiHash: function(event) {<br></td></tr
><tr
id=sl_svn2402_394

><td class="source">		return {<br></td></tr
><tr
id=sl_svn2402_395

><td class="source">			helper: this.helper,<br></td></tr
><tr
id=sl_svn2402_396

><td class="source">			position: this.position,<br></td></tr
><tr
id=sl_svn2402_397

><td class="source">			absolutePosition: this.positionAbs, //deprecated<br></td></tr
><tr
id=sl_svn2402_398

><td class="source">			offset: this.positionAbs<br></td></tr
><tr
id=sl_svn2402_399

><td class="source">		};<br></td></tr
><tr
id=sl_svn2402_400

><td class="source">	}<br></td></tr
><tr
id=sl_svn2402_401

><td class="source"><br></td></tr
><tr
id=sl_svn2402_402

><td class="source">}));<br></td></tr
><tr
id=sl_svn2402_403

><td class="source"><br></td></tr
><tr
id=sl_svn2402_404

><td class="source">$.extend($.ui.draggable, {<br></td></tr
><tr
id=sl_svn2402_405

><td class="source">	version: &quot;@VERSION&quot;,<br></td></tr
><tr
id=sl_svn2402_406

><td class="source">	eventPrefix: &quot;drag&quot;,<br></td></tr
><tr
id=sl_svn2402_407

><td class="source">	defaults: {<br></td></tr
><tr
id=sl_svn2402_408

><td class="source">		addClasses: true,<br></td></tr
><tr
id=sl_svn2402_409

><td class="source">		appendTo: &quot;parent&quot;,<br></td></tr
><tr
id=sl_svn2402_410

><td class="source">		axis: false,<br></td></tr
><tr
id=sl_svn2402_411

><td class="source">		cancel: &quot;:input,option&quot;,<br></td></tr
><tr
id=sl_svn2402_412

><td class="source">		connectToSortable: false,<br></td></tr
><tr
id=sl_svn2402_413

><td class="source">		containment: false,<br></td></tr
><tr
id=sl_svn2402_414

><td class="source">		cursor: &quot;auto&quot;,<br></td></tr
><tr
id=sl_svn2402_415

><td class="source">		cursorAt: false,<br></td></tr
><tr
id=sl_svn2402_416

><td class="source">		delay: 0,<br></td></tr
><tr
id=sl_svn2402_417

><td class="source">		distance: 1,<br></td></tr
><tr
id=sl_svn2402_418

><td class="source">		grid: false,<br></td></tr
><tr
id=sl_svn2402_419

><td class="source">		handle: false,<br></td></tr
><tr
id=sl_svn2402_420

><td class="source">		helper: &quot;original&quot;,<br></td></tr
><tr
id=sl_svn2402_421

><td class="source">		iframeFix: false,<br></td></tr
><tr
id=sl_svn2402_422

><td class="source">		opacity: false,<br></td></tr
><tr
id=sl_svn2402_423

><td class="source">		refreshPositions: false,<br></td></tr
><tr
id=sl_svn2402_424

><td class="source">		revert: false,<br></td></tr
><tr
id=sl_svn2402_425

><td class="source">		revertDuration: 500,<br></td></tr
><tr
id=sl_svn2402_426

><td class="source">		scope: &quot;default&quot;,<br></td></tr
><tr
id=sl_svn2402_427

><td class="source">		scroll: true,<br></td></tr
><tr
id=sl_svn2402_428

><td class="source">		scrollSensitivity: 20,<br></td></tr
><tr
id=sl_svn2402_429

><td class="source">		scrollSpeed: 20,<br></td></tr
><tr
id=sl_svn2402_430

><td class="source">		snap: false,<br></td></tr
><tr
id=sl_svn2402_431

><td class="source">		snapMode: &quot;both&quot;,<br></td></tr
><tr
id=sl_svn2402_432

><td class="source">		snapTolerance: 20,<br></td></tr
><tr
id=sl_svn2402_433

><td class="source">		stack: false,<br></td></tr
><tr
id=sl_svn2402_434

><td class="source">		zIndex: false<br></td></tr
><tr
id=sl_svn2402_435

><td class="source">	}<br></td></tr
><tr
id=sl_svn2402_436

><td class="source">});<br></td></tr
><tr
id=sl_svn2402_437

><td class="source"><br></td></tr
><tr
id=sl_svn2402_438

><td class="source">$.ui.plugin.add(&quot;draggable&quot;, &quot;connectToSortable&quot;, {<br></td></tr
><tr
id=sl_svn2402_439

><td class="source">	start: function(event, ui) {<br></td></tr
><tr
id=sl_svn2402_440

><td class="source"><br></td></tr
><tr
id=sl_svn2402_441

><td class="source">		var inst = $(this).data(&quot;draggable&quot;), o = inst.options,<br></td></tr
><tr
id=sl_svn2402_442

><td class="source">			uiSortable = $.extend({}, ui, { item: inst.element });<br></td></tr
><tr
id=sl_svn2402_443

><td class="source">		inst.sortables = [];<br></td></tr
><tr
id=sl_svn2402_444

><td class="source">		$(o.connectToSortable).each(function() {<br></td></tr
><tr
id=sl_svn2402_445

><td class="source">			var sortable = $.data(this, &#39;sortable&#39;);<br></td></tr
><tr
id=sl_svn2402_446

><td class="source">			if (sortable &amp;&amp; !sortable.options.disabled) {<br></td></tr
><tr
id=sl_svn2402_447

><td class="source">				inst.sortables.push({<br></td></tr
><tr
id=sl_svn2402_448

><td class="source">					instance: sortable,<br></td></tr
><tr
id=sl_svn2402_449

><td class="source">					shouldRevert: sortable.options.revert<br></td></tr
><tr
id=sl_svn2402_450

><td class="source">				});<br></td></tr
><tr
id=sl_svn2402_451

><td class="source">				sortable._refreshItems();	//Do a one-time refresh at start to refresh the containerCache<br></td></tr
><tr
id=sl_svn2402_452

><td class="source">				sortable._trigger(&quot;activate&quot;, event, uiSortable);<br></td></tr
><tr
id=sl_svn2402_453

><td class="source">			}<br></td></tr
><tr
id=sl_svn2402_454

><td class="source">		});<br></td></tr
><tr
id=sl_svn2402_455

><td class="source"><br></td></tr
><tr
id=sl_svn2402_456

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_457

><td class="source">	stop: function(event, ui) {<br></td></tr
><tr
id=sl_svn2402_458

><td class="source"><br></td></tr
><tr
id=sl_svn2402_459

><td class="source">		//If we are still over the sortable, we fake the stop event of the sortable, but also remove helper<br></td></tr
><tr
id=sl_svn2402_460

><td class="source">		var inst = $(this).data(&quot;draggable&quot;),<br></td></tr
><tr
id=sl_svn2402_461

><td class="source">			uiSortable = $.extend({}, ui, { item: inst.element });<br></td></tr
><tr
id=sl_svn2402_462

><td class="source"><br></td></tr
><tr
id=sl_svn2402_463

><td class="source">		$.each(inst.sortables, function() {<br></td></tr
><tr
id=sl_svn2402_464

><td class="source">			if(this.instance.isOver) {<br></td></tr
><tr
id=sl_svn2402_465

><td class="source"><br></td></tr
><tr
id=sl_svn2402_466

><td class="source">				this.instance.isOver = 0;<br></td></tr
><tr
id=sl_svn2402_467

><td class="source"><br></td></tr
><tr
id=sl_svn2402_468

><td class="source">				inst.cancelHelperRemoval = true; //Don&#39;t remove the helper in the draggable instance<br></td></tr
><tr
id=sl_svn2402_469

><td class="source">				this.instance.cancelHelperRemoval = false; //Remove it in the sortable instance (so sortable plugins like revert still work)<br></td></tr
><tr
id=sl_svn2402_470

><td class="source"><br></td></tr
><tr
id=sl_svn2402_471

><td class="source">				//The sortable revert is supported, and we have to set a temporary dropped variable on the draggable to support revert: &#39;valid/invalid&#39;<br></td></tr
><tr
id=sl_svn2402_472

><td class="source">				if(this.shouldRevert) this.instance.options.revert = true;<br></td></tr
><tr
id=sl_svn2402_473

><td class="source"><br></td></tr
><tr
id=sl_svn2402_474

><td class="source">				//Trigger the stop of the sortable<br></td></tr
><tr
id=sl_svn2402_475

><td class="source">				this.instance._mouseStop(event);<br></td></tr
><tr
id=sl_svn2402_476

><td class="source"><br></td></tr
><tr
id=sl_svn2402_477

><td class="source">				this.instance.options.helper = this.instance.options._helper;<br></td></tr
><tr
id=sl_svn2402_478

><td class="source"><br></td></tr
><tr
id=sl_svn2402_479

><td class="source">				//If the helper has been the original item, restore properties in the sortable<br></td></tr
><tr
id=sl_svn2402_480

><td class="source">				if(inst.options.helper == &#39;original&#39;)<br></td></tr
><tr
id=sl_svn2402_481

><td class="source">					this.instance.currentItem.css({ top: &#39;auto&#39;, left: &#39;auto&#39; });<br></td></tr
><tr
id=sl_svn2402_482

><td class="source"><br></td></tr
><tr
id=sl_svn2402_483

><td class="source">			} else {<br></td></tr
><tr
id=sl_svn2402_484

><td class="source">				this.instance.cancelHelperRemoval = false; //Remove the helper in the sortable instance<br></td></tr
><tr
id=sl_svn2402_485

><td class="source">				this.instance._trigger(&quot;deactivate&quot;, event, uiSortable);<br></td></tr
><tr
id=sl_svn2402_486

><td class="source">			}<br></td></tr
><tr
id=sl_svn2402_487

><td class="source"><br></td></tr
><tr
id=sl_svn2402_488

><td class="source">		});<br></td></tr
><tr
id=sl_svn2402_489

><td class="source"><br></td></tr
><tr
id=sl_svn2402_490

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_491

><td class="source">	drag: function(event, ui) {<br></td></tr
><tr
id=sl_svn2402_492

><td class="source"><br></td></tr
><tr
id=sl_svn2402_493

><td class="source">		var inst = $(this).data(&quot;draggable&quot;), self = this;<br></td></tr
><tr
id=sl_svn2402_494

><td class="source"><br></td></tr
><tr
id=sl_svn2402_495

><td class="source">		var checkPos = function(o) {<br></td></tr
><tr
id=sl_svn2402_496

><td class="source">			var dyClick = this.offset.click.top, dxClick = this.offset.click.left;<br></td></tr
><tr
id=sl_svn2402_497

><td class="source">			var helperTop = this.positionAbs.top, helperLeft = this.positionAbs.left;<br></td></tr
><tr
id=sl_svn2402_498

><td class="source">			var itemHeight = o.height, itemWidth = o.width;<br></td></tr
><tr
id=sl_svn2402_499

><td class="source">			var itemTop = o.top, itemLeft = o.left;<br></td></tr
><tr
id=sl_svn2402_500

><td class="source"><br></td></tr
><tr
id=sl_svn2402_501

><td class="source">			return $.ui.isOver(helperTop + dyClick, helperLeft + dxClick, itemTop, itemLeft, itemHeight, itemWidth);<br></td></tr
><tr
id=sl_svn2402_502

><td class="source">		};<br></td></tr
><tr
id=sl_svn2402_503

><td class="source"><br></td></tr
><tr
id=sl_svn2402_504

><td class="source">		$.each(inst.sortables, function(i) {<br></td></tr
><tr
id=sl_svn2402_505

><td class="source">			<br></td></tr
><tr
id=sl_svn2402_506

><td class="source">			//Copy over some variables to allow calling the sortable&#39;s native _intersectsWith<br></td></tr
><tr
id=sl_svn2402_507

><td class="source">			this.instance.positionAbs = inst.positionAbs;<br></td></tr
><tr
id=sl_svn2402_508

><td class="source">			this.instance.helperProportions = inst.helperProportions;<br></td></tr
><tr
id=sl_svn2402_509

><td class="source">			this.instance.offset.click = inst.offset.click;<br></td></tr
><tr
id=sl_svn2402_510

><td class="source">			<br></td></tr
><tr
id=sl_svn2402_511

><td class="source">			if(this.instance._intersectsWith(this.instance.containerCache)) {<br></td></tr
><tr
id=sl_svn2402_512

><td class="source"><br></td></tr
><tr
id=sl_svn2402_513

><td class="source">				//If it intersects, we use a little isOver variable and set it once, so our move-in stuff gets fired only once<br></td></tr
><tr
id=sl_svn2402_514

><td class="source">				if(!this.instance.isOver) {<br></td></tr
><tr
id=sl_svn2402_515

><td class="source"><br></td></tr
><tr
id=sl_svn2402_516

><td class="source">					this.instance.isOver = 1;<br></td></tr
><tr
id=sl_svn2402_517

><td class="source">					//Now we fake the start of dragging for the sortable instance,<br></td></tr
><tr
id=sl_svn2402_518

><td class="source">					//by cloning the list group item, appending it to the sortable and using it as inst.currentItem<br></td></tr
><tr
id=sl_svn2402_519

><td class="source">					//We can then fire the start event of the sortable with our passed browser event, and our own helper (so it doesn&#39;t create a new one)<br></td></tr
><tr
id=sl_svn2402_520

><td class="source">					this.instance.currentItem = $(self).clone().appendTo(this.instance.element).data(&quot;sortable-item&quot;, true);<br></td></tr
><tr
id=sl_svn2402_521

><td class="source">					this.instance.options._helper = this.instance.options.helper; //Store helper option to later restore it<br></td></tr
><tr
id=sl_svn2402_522

><td class="source">					this.instance.options.helper = function() { return ui.helper[0]; };<br></td></tr
><tr
id=sl_svn2402_523

><td class="source"><br></td></tr
><tr
id=sl_svn2402_524

><td class="source">					event.target = this.instance.currentItem[0];<br></td></tr
><tr
id=sl_svn2402_525

><td class="source">					this.instance._mouseCapture(event, true);<br></td></tr
><tr
id=sl_svn2402_526

><td class="source">					this.instance._mouseStart(event, true, true);<br></td></tr
><tr
id=sl_svn2402_527

><td class="source"><br></td></tr
><tr
id=sl_svn2402_528

><td class="source">					//Because the browser event is way off the new appended portlet, we modify a couple of variables to reflect the changes<br></td></tr
><tr
id=sl_svn2402_529

><td class="source">					this.instance.offset.click.top = inst.offset.click.top;<br></td></tr
><tr
id=sl_svn2402_530

><td class="source">					this.instance.offset.click.left = inst.offset.click.left;<br></td></tr
><tr
id=sl_svn2402_531

><td class="source">					this.instance.offset.parent.left -= inst.offset.parent.left - this.instance.offset.parent.left;<br></td></tr
><tr
id=sl_svn2402_532

><td class="source">					this.instance.offset.parent.top -= inst.offset.parent.top - this.instance.offset.parent.top;<br></td></tr
><tr
id=sl_svn2402_533

><td class="source"><br></td></tr
><tr
id=sl_svn2402_534

><td class="source">					inst._trigger(&quot;toSortable&quot;, event);<br></td></tr
><tr
id=sl_svn2402_535

><td class="source">					inst.dropped = this.instance.element; //draggable revert needs that<br></td></tr
><tr
id=sl_svn2402_536

><td class="source">					//hack so receive/update callbacks work (mostly)<br></td></tr
><tr
id=sl_svn2402_537

><td class="source">					inst.currentItem = inst.element;<br></td></tr
><tr
id=sl_svn2402_538

><td class="source">					this.instance.fromOutside = inst;<br></td></tr
><tr
id=sl_svn2402_539

><td class="source"><br></td></tr
><tr
id=sl_svn2402_540

><td class="source">				}<br></td></tr
><tr
id=sl_svn2402_541

><td class="source"><br></td></tr
><tr
id=sl_svn2402_542

><td class="source">				//Provided we did all the previous steps, we can fire the drag event of the sortable on every draggable drag, when it intersects with the sortable<br></td></tr
><tr
id=sl_svn2402_543

><td class="source">				if(this.instance.currentItem) this.instance._mouseDrag(event);<br></td></tr
><tr
id=sl_svn2402_544

><td class="source"><br></td></tr
><tr
id=sl_svn2402_545

><td class="source">			} else {<br></td></tr
><tr
id=sl_svn2402_546

><td class="source"><br></td></tr
><tr
id=sl_svn2402_547

><td class="source">				//If it doesn&#39;t intersect with the sortable, and it intersected before,<br></td></tr
><tr
id=sl_svn2402_548

><td class="source">				//we fake the drag stop of the sortable, but make sure it doesn&#39;t remove the helper by using cancelHelperRemoval<br></td></tr
><tr
id=sl_svn2402_549

><td class="source">				if(this.instance.isOver) {<br></td></tr
><tr
id=sl_svn2402_550

><td class="source"><br></td></tr
><tr
id=sl_svn2402_551

><td class="source">					this.instance.isOver = 0;<br></td></tr
><tr
id=sl_svn2402_552

><td class="source">					this.instance.cancelHelperRemoval = true;<br></td></tr
><tr
id=sl_svn2402_553

><td class="source">					<br></td></tr
><tr
id=sl_svn2402_554

><td class="source">					//Prevent reverting on this forced stop<br></td></tr
><tr
id=sl_svn2402_555

><td class="source">					this.instance.options.revert = false;<br></td></tr
><tr
id=sl_svn2402_556

><td class="source">					<br></td></tr
><tr
id=sl_svn2402_557

><td class="source">					// The out event needs to be triggered independently<br></td></tr
><tr
id=sl_svn2402_558

><td class="source">					this.instance._trigger(&#39;out&#39;, event, this.instance._uiHash(this.instance));<br></td></tr
><tr
id=sl_svn2402_559

><td class="source">					<br></td></tr
><tr
id=sl_svn2402_560

><td class="source">					this.instance._mouseStop(event, true);<br></td></tr
><tr
id=sl_svn2402_561

><td class="source">					this.instance.options.helper = this.instance.options._helper;<br></td></tr
><tr
id=sl_svn2402_562

><td class="source"><br></td></tr
><tr
id=sl_svn2402_563

><td class="source">					//Now we remove our currentItem, the list group clone again, and the placeholder, and animate the helper back to it&#39;s original size<br></td></tr
><tr
id=sl_svn2402_564

><td class="source">					this.instance.currentItem.remove();<br></td></tr
><tr
id=sl_svn2402_565

><td class="source">					if(this.instance.placeholder) this.instance.placeholder.remove();<br></td></tr
><tr
id=sl_svn2402_566

><td class="source"><br></td></tr
><tr
id=sl_svn2402_567

><td class="source">					inst._trigger(&quot;fromSortable&quot;, event);<br></td></tr
><tr
id=sl_svn2402_568

><td class="source">					inst.dropped = false; //draggable revert needs that<br></td></tr
><tr
id=sl_svn2402_569

><td class="source">				}<br></td></tr
><tr
id=sl_svn2402_570

><td class="source"><br></td></tr
><tr
id=sl_svn2402_571

><td class="source">			};<br></td></tr
><tr
id=sl_svn2402_572

><td class="source"><br></td></tr
><tr
id=sl_svn2402_573

><td class="source">		});<br></td></tr
><tr
id=sl_svn2402_574

><td class="source"><br></td></tr
><tr
id=sl_svn2402_575

><td class="source">	}<br></td></tr
><tr
id=sl_svn2402_576

><td class="source">});<br></td></tr
><tr
id=sl_svn2402_577

><td class="source"><br></td></tr
><tr
id=sl_svn2402_578

><td class="source">$.ui.plugin.add(&quot;draggable&quot;, &quot;cursor&quot;, {<br></td></tr
><tr
id=sl_svn2402_579

><td class="source">	start: function(event, ui) {<br></td></tr
><tr
id=sl_svn2402_580

><td class="source">		var t = $(&#39;body&#39;), o = $(this).data(&#39;draggable&#39;).options;<br></td></tr
><tr
id=sl_svn2402_581

><td class="source">		if (t.css(&quot;cursor&quot;)) o._cursor = t.css(&quot;cursor&quot;);<br></td></tr
><tr
id=sl_svn2402_582

><td class="source">		t.css(&quot;cursor&quot;, o.cursor);<br></td></tr
><tr
id=sl_svn2402_583

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_584

><td class="source">	stop: function(event, ui) {<br></td></tr
><tr
id=sl_svn2402_585

><td class="source">		var o = $(this).data(&#39;draggable&#39;).options;<br></td></tr
><tr
id=sl_svn2402_586

><td class="source">		if (o._cursor) $(&#39;body&#39;).css(&quot;cursor&quot;, o._cursor);<br></td></tr
><tr
id=sl_svn2402_587

><td class="source">	}<br></td></tr
><tr
id=sl_svn2402_588

><td class="source">});<br></td></tr
><tr
id=sl_svn2402_589

><td class="source"><br></td></tr
><tr
id=sl_svn2402_590

><td class="source">$.ui.plugin.add(&quot;draggable&quot;, &quot;iframeFix&quot;, {<br></td></tr
><tr
id=sl_svn2402_591

><td class="source">	start: function(event, ui) {<br></td></tr
><tr
id=sl_svn2402_592

><td class="source">		var o = $(this).data(&#39;draggable&#39;).options;<br></td></tr
><tr
id=sl_svn2402_593

><td class="source">		$(o.iframeFix === true ? &quot;iframe&quot; : o.iframeFix).each(function() {<br></td></tr
><tr
id=sl_svn2402_594

><td class="source">			$(&#39;&lt;div class=&quot;ui-draggable-iframeFix&quot; style=&quot;background: #fff;&quot;&gt;&lt;/div&gt;&#39;)<br></td></tr
><tr
id=sl_svn2402_595

><td class="source">			.css({<br></td></tr
><tr
id=sl_svn2402_596

><td class="source">				width: this.offsetWidth+&quot;px&quot;, height: this.offsetHeight+&quot;px&quot;,<br></td></tr
><tr
id=sl_svn2402_597

><td class="source">				position: &quot;absolute&quot;, opacity: &quot;0.001&quot;, zIndex: 1000<br></td></tr
><tr
id=sl_svn2402_598

><td class="source">			})<br></td></tr
><tr
id=sl_svn2402_599

><td class="source">			.css($(this).offset())<br></td></tr
><tr
id=sl_svn2402_600

><td class="source">			.appendTo(&quot;body&quot;);<br></td></tr
><tr
id=sl_svn2402_601

><td class="source">		});<br></td></tr
><tr
id=sl_svn2402_602

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_603

><td class="source">	stop: function(event, ui) {<br></td></tr
><tr
id=sl_svn2402_604

><td class="source">		$(&quot;div.ui-draggable-iframeFix&quot;).each(function() { this.parentNode.removeChild(this); }); //Remove frame helpers<br></td></tr
><tr
id=sl_svn2402_605

><td class="source">	}<br></td></tr
><tr
id=sl_svn2402_606

><td class="source">});<br></td></tr
><tr
id=sl_svn2402_607

><td class="source"><br></td></tr
><tr
id=sl_svn2402_608

><td class="source">$.ui.plugin.add(&quot;draggable&quot;, &quot;opacity&quot;, {<br></td></tr
><tr
id=sl_svn2402_609

><td class="source">	start: function(event, ui) {<br></td></tr
><tr
id=sl_svn2402_610

><td class="source">		var t = $(ui.helper), o = $(this).data(&#39;draggable&#39;).options;<br></td></tr
><tr
id=sl_svn2402_611

><td class="source">		if(t.css(&quot;opacity&quot;)) o._opacity = t.css(&quot;opacity&quot;);<br></td></tr
><tr
id=sl_svn2402_612

><td class="source">		t.css(&#39;opacity&#39;, o.opacity);<br></td></tr
><tr
id=sl_svn2402_613

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_614

><td class="source">	stop: function(event, ui) {<br></td></tr
><tr
id=sl_svn2402_615

><td class="source">		var o = $(this).data(&#39;draggable&#39;).options;<br></td></tr
><tr
id=sl_svn2402_616

><td class="source">		if(o._opacity) $(ui.helper).css(&#39;opacity&#39;, o._opacity);<br></td></tr
><tr
id=sl_svn2402_617

><td class="source">	}<br></td></tr
><tr
id=sl_svn2402_618

><td class="source">});<br></td></tr
><tr
id=sl_svn2402_619

><td class="source"><br></td></tr
><tr
id=sl_svn2402_620

><td class="source">$.ui.plugin.add(&quot;draggable&quot;, &quot;scroll&quot;, {<br></td></tr
><tr
id=sl_svn2402_621

><td class="source">	start: function(event, ui) {<br></td></tr
><tr
id=sl_svn2402_622

><td class="source">		var i = $(this).data(&quot;draggable&quot;);<br></td></tr
><tr
id=sl_svn2402_623

><td class="source">		if(i.scrollParent[0] != document &amp;&amp; i.scrollParent[0].tagName != &#39;HTML&#39;) i.overflowOffset = i.scrollParent.offset();<br></td></tr
><tr
id=sl_svn2402_624

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_625

><td class="source">	drag: function(event, ui) {<br></td></tr
><tr
id=sl_svn2402_626

><td class="source"><br></td></tr
><tr
id=sl_svn2402_627

><td class="source">		var i = $(this).data(&quot;draggable&quot;), o = i.options, scrolled = false;<br></td></tr
><tr
id=sl_svn2402_628

><td class="source"><br></td></tr
><tr
id=sl_svn2402_629

><td class="source">		if(i.scrollParent[0] != document &amp;&amp; i.scrollParent[0].tagName != &#39;HTML&#39;) {<br></td></tr
><tr
id=sl_svn2402_630

><td class="source"><br></td></tr
><tr
id=sl_svn2402_631

><td class="source">			if(!o.axis || o.axis != &#39;x&#39;) {<br></td></tr
><tr
id=sl_svn2402_632

><td class="source">				if((i.overflowOffset.top + i.scrollParent[0].offsetHeight) - event.pageY &lt; o.scrollSensitivity)<br></td></tr
><tr
id=sl_svn2402_633

><td class="source">					i.scrollParent[0].scrollTop = scrolled = i.scrollParent[0].scrollTop + o.scrollSpeed;<br></td></tr
><tr
id=sl_svn2402_634

><td class="source">				else if(event.pageY - i.overflowOffset.top &lt; o.scrollSensitivity)<br></td></tr
><tr
id=sl_svn2402_635

><td class="source">					i.scrollParent[0].scrollTop = scrolled = i.scrollParent[0].scrollTop - o.scrollSpeed;<br></td></tr
><tr
id=sl_svn2402_636

><td class="source">			}<br></td></tr
><tr
id=sl_svn2402_637

><td class="source"><br></td></tr
><tr
id=sl_svn2402_638

><td class="source">			if(!o.axis || o.axis != &#39;y&#39;) {<br></td></tr
><tr
id=sl_svn2402_639

><td class="source">				if((i.overflowOffset.left + i.scrollParent[0].offsetWidth) - event.pageX &lt; o.scrollSensitivity)<br></td></tr
><tr
id=sl_svn2402_640

><td class="source">					i.scrollParent[0].scrollLeft = scrolled = i.scrollParent[0].scrollLeft + o.scrollSpeed;<br></td></tr
><tr
id=sl_svn2402_641

><td class="source">				else if(event.pageX - i.overflowOffset.left &lt; o.scrollSensitivity)<br></td></tr
><tr
id=sl_svn2402_642

><td class="source">					i.scrollParent[0].scrollLeft = scrolled = i.scrollParent[0].scrollLeft - o.scrollSpeed;<br></td></tr
><tr
id=sl_svn2402_643

><td class="source">			}<br></td></tr
><tr
id=sl_svn2402_644

><td class="source"><br></td></tr
><tr
id=sl_svn2402_645

><td class="source">		} else {<br></td></tr
><tr
id=sl_svn2402_646

><td class="source"><br></td></tr
><tr
id=sl_svn2402_647

><td class="source">			if(!o.axis || o.axis != &#39;x&#39;) {<br></td></tr
><tr
id=sl_svn2402_648

><td class="source">				if(event.pageY - $(document).scrollTop() &lt; o.scrollSensitivity)<br></td></tr
><tr
id=sl_svn2402_649

><td class="source">					scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);<br></td></tr
><tr
id=sl_svn2402_650

><td class="source">				else if($(window).height() - (event.pageY - $(document).scrollTop()) &lt; o.scrollSensitivity)<br></td></tr
><tr
id=sl_svn2402_651

><td class="source">					scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);<br></td></tr
><tr
id=sl_svn2402_652

><td class="source">			}<br></td></tr
><tr
id=sl_svn2402_653

><td class="source"><br></td></tr
><tr
id=sl_svn2402_654

><td class="source">			if(!o.axis || o.axis != &#39;y&#39;) {<br></td></tr
><tr
id=sl_svn2402_655

><td class="source">				if(event.pageX - $(document).scrollLeft() &lt; o.scrollSensitivity)<br></td></tr
><tr
id=sl_svn2402_656

><td class="source">					scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);<br></td></tr
><tr
id=sl_svn2402_657

><td class="source">				else if($(window).width() - (event.pageX - $(document).scrollLeft()) &lt; o.scrollSensitivity)<br></td></tr
><tr
id=sl_svn2402_658

><td class="source">					scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);<br></td></tr
><tr
id=sl_svn2402_659

><td class="source">			}<br></td></tr
><tr
id=sl_svn2402_660

><td class="source"><br></td></tr
><tr
id=sl_svn2402_661

><td class="source">		}<br></td></tr
><tr
id=sl_svn2402_662

><td class="source"><br></td></tr
><tr
id=sl_svn2402_663

><td class="source">		if(scrolled !== false &amp;&amp; $.ui.ddmanager &amp;&amp; !o.dropBehaviour)<br></td></tr
><tr
id=sl_svn2402_664

><td class="source">			$.ui.ddmanager.prepareOffsets(i, event);<br></td></tr
><tr
id=sl_svn2402_665

><td class="source"><br></td></tr
><tr
id=sl_svn2402_666

><td class="source">	}<br></td></tr
><tr
id=sl_svn2402_667

><td class="source">});<br></td></tr
><tr
id=sl_svn2402_668

><td class="source"><br></td></tr
><tr
id=sl_svn2402_669

><td class="source">$.ui.plugin.add(&quot;draggable&quot;, &quot;snap&quot;, {<br></td></tr
><tr
id=sl_svn2402_670

><td class="source">	start: function(event, ui) {<br></td></tr
><tr
id=sl_svn2402_671

><td class="source"><br></td></tr
><tr
id=sl_svn2402_672

><td class="source">		var i = $(this).data(&quot;draggable&quot;), o = i.options;<br></td></tr
><tr
id=sl_svn2402_673

><td class="source">		i.snapElements = [];<br></td></tr
><tr
id=sl_svn2402_674

><td class="source"><br></td></tr
><tr
id=sl_svn2402_675

><td class="source">		$(o.snap.constructor != String ? ( o.snap.items || &#39;:data(draggable)&#39; ) : o.snap).each(function() {<br></td></tr
><tr
id=sl_svn2402_676

><td class="source">			var $t = $(this); var $o = $t.offset();<br></td></tr
><tr
id=sl_svn2402_677

><td class="source">			if(this != i.element[0]) i.snapElements.push({<br></td></tr
><tr
id=sl_svn2402_678

><td class="source">				item: this,<br></td></tr
><tr
id=sl_svn2402_679

><td class="source">				width: $t.outerWidth(), height: $t.outerHeight(),<br></td></tr
><tr
id=sl_svn2402_680

><td class="source">				top: $o.top, left: $o.left<br></td></tr
><tr
id=sl_svn2402_681

><td class="source">			});<br></td></tr
><tr
id=sl_svn2402_682

><td class="source">		});<br></td></tr
><tr
id=sl_svn2402_683

><td class="source"><br></td></tr
><tr
id=sl_svn2402_684

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_685

><td class="source">	drag: function(event, ui) {<br></td></tr
><tr
id=sl_svn2402_686

><td class="source"><br></td></tr
><tr
id=sl_svn2402_687

><td class="source">		var inst = $(this).data(&quot;draggable&quot;), o = inst.options;<br></td></tr
><tr
id=sl_svn2402_688

><td class="source">		var d = o.snapTolerance;<br></td></tr
><tr
id=sl_svn2402_689

><td class="source"><br></td></tr
><tr
id=sl_svn2402_690

><td class="source">		var x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,<br></td></tr
><tr
id=sl_svn2402_691

><td class="source">			y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;<br></td></tr
><tr
id=sl_svn2402_692

><td class="source"><br></td></tr
><tr
id=sl_svn2402_693

><td class="source">		for (var i = inst.snapElements.length - 1; i &gt;= 0; i--){<br></td></tr
><tr
id=sl_svn2402_694

><td class="source"><br></td></tr
><tr
id=sl_svn2402_695

><td class="source">			var l = inst.snapElements[i].left, r = l + inst.snapElements[i].width,<br></td></tr
><tr
id=sl_svn2402_696

><td class="source">				t = inst.snapElements[i].top, b = t + inst.snapElements[i].height;<br></td></tr
><tr
id=sl_svn2402_697

><td class="source"><br></td></tr
><tr
id=sl_svn2402_698

><td class="source">			//Yes, I know, this is insane ;)<br></td></tr
><tr
id=sl_svn2402_699

><td class="source">			if(!((l-d &lt; x1 &amp;&amp; x1 &lt; r+d &amp;&amp; t-d &lt; y1 &amp;&amp; y1 &lt; b+d) || (l-d &lt; x1 &amp;&amp; x1 &lt; r+d &amp;&amp; t-d &lt; y2 &amp;&amp; y2 &lt; b+d) || (l-d &lt; x2 &amp;&amp; x2 &lt; r+d &amp;&amp; t-d &lt; y1 &amp;&amp; y1 &lt; b+d) || (l-d &lt; x2 &amp;&amp; x2 &lt; r+d &amp;&amp; t-d &lt; y2 &amp;&amp; y2 &lt; b+d))) {<br></td></tr
><tr
id=sl_svn2402_700

><td class="source">				if(inst.snapElements[i].snapping) (inst.options.snap.release &amp;&amp; inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item })));<br></td></tr
><tr
id=sl_svn2402_701

><td class="source">				inst.snapElements[i].snapping = false;<br></td></tr
><tr
id=sl_svn2402_702

><td class="source">				continue;<br></td></tr
><tr
id=sl_svn2402_703

><td class="source">			}<br></td></tr
><tr
id=sl_svn2402_704

><td class="source"><br></td></tr
><tr
id=sl_svn2402_705

><td class="source">			if(o.snapMode != &#39;inner&#39;) {<br></td></tr
><tr
id=sl_svn2402_706

><td class="source">				var ts = Math.abs(t - y2) &lt;= d;<br></td></tr
><tr
id=sl_svn2402_707

><td class="source">				var bs = Math.abs(b - y1) &lt;= d;<br></td></tr
><tr
id=sl_svn2402_708

><td class="source">				var ls = Math.abs(l - x2) &lt;= d;<br></td></tr
><tr
id=sl_svn2402_709

><td class="source">				var rs = Math.abs(r - x1) &lt;= d;<br></td></tr
><tr
id=sl_svn2402_710

><td class="source">				if(ts) ui.position.top = inst._convertPositionTo(&quot;relative&quot;, { top: t - inst.helperProportions.height, left: 0 }).top - inst.margins.top;<br></td></tr
><tr
id=sl_svn2402_711

><td class="source">				if(bs) ui.position.top = inst._convertPositionTo(&quot;relative&quot;, { top: b, left: 0 }).top - inst.margins.top;<br></td></tr
><tr
id=sl_svn2402_712

><td class="source">				if(ls) ui.position.left = inst._convertPositionTo(&quot;relative&quot;, { top: 0, left: l - inst.helperProportions.width }).left - inst.margins.left;<br></td></tr
><tr
id=sl_svn2402_713

><td class="source">				if(rs) ui.position.left = inst._convertPositionTo(&quot;relative&quot;, { top: 0, left: r }).left - inst.margins.left;<br></td></tr
><tr
id=sl_svn2402_714

><td class="source">			}<br></td></tr
><tr
id=sl_svn2402_715

><td class="source"><br></td></tr
><tr
id=sl_svn2402_716

><td class="source">			var first = (ts || bs || ls || rs);<br></td></tr
><tr
id=sl_svn2402_717

><td class="source"><br></td></tr
><tr
id=sl_svn2402_718

><td class="source">			if(o.snapMode != &#39;outer&#39;) {<br></td></tr
><tr
id=sl_svn2402_719

><td class="source">				var ts = Math.abs(t - y1) &lt;= d;<br></td></tr
><tr
id=sl_svn2402_720

><td class="source">				var bs = Math.abs(b - y2) &lt;= d;<br></td></tr
><tr
id=sl_svn2402_721

><td class="source">				var ls = Math.abs(l - x1) &lt;= d;<br></td></tr
><tr
id=sl_svn2402_722

><td class="source">				var rs = Math.abs(r - x2) &lt;= d;<br></td></tr
><tr
id=sl_svn2402_723

><td class="source">				if(ts) ui.position.top = inst._convertPositionTo(&quot;relative&quot;, { top: t, left: 0 }).top - inst.margins.top;<br></td></tr
><tr
id=sl_svn2402_724

><td class="source">				if(bs) ui.position.top = inst._convertPositionTo(&quot;relative&quot;, { top: b - inst.helperProportions.height, left: 0 }).top - inst.margins.top;<br></td></tr
><tr
id=sl_svn2402_725

><td class="source">				if(ls) ui.position.left = inst._convertPositionTo(&quot;relative&quot;, { top: 0, left: l }).left - inst.margins.left;<br></td></tr
><tr
id=sl_svn2402_726

><td class="source">				if(rs) ui.position.left = inst._convertPositionTo(&quot;relative&quot;, { top: 0, left: r - inst.helperProportions.width }).left - inst.margins.left;<br></td></tr
><tr
id=sl_svn2402_727

><td class="source">			}<br></td></tr
><tr
id=sl_svn2402_728

><td class="source"><br></td></tr
><tr
id=sl_svn2402_729

><td class="source">			if(!inst.snapElements[i].snapping &amp;&amp; (ts || bs || ls || rs || first))<br></td></tr
><tr
id=sl_svn2402_730

><td class="source">				(inst.options.snap.snap &amp;&amp; inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item })));<br></td></tr
><tr
id=sl_svn2402_731

><td class="source">			inst.snapElements[i].snapping = (ts || bs || ls || rs || first);<br></td></tr
><tr
id=sl_svn2402_732

><td class="source"><br></td></tr
><tr
id=sl_svn2402_733

><td class="source">		};<br></td></tr
><tr
id=sl_svn2402_734

><td class="source"><br></td></tr
><tr
id=sl_svn2402_735

><td class="source">	}<br></td></tr
><tr
id=sl_svn2402_736

><td class="source">});<br></td></tr
><tr
id=sl_svn2402_737

><td class="source"><br></td></tr
><tr
id=sl_svn2402_738

><td class="source">$.ui.plugin.add(&quot;draggable&quot;, &quot;stack&quot;, {<br></td></tr
><tr
id=sl_svn2402_739

><td class="source">	start: function(event, ui) {<br></td></tr
><tr
id=sl_svn2402_740

><td class="source"><br></td></tr
><tr
id=sl_svn2402_741

><td class="source">		var o = $(this).data(&quot;draggable&quot;).options;<br></td></tr
><tr
id=sl_svn2402_742

><td class="source"><br></td></tr
><tr
id=sl_svn2402_743

><td class="source">		var group = $.makeArray($(o.stack.group)).sort(function(a,b) {<br></td></tr
><tr
id=sl_svn2402_744

><td class="source">			return (parseInt($(a).css(&quot;zIndex&quot;),10) || o.stack.min) - (parseInt($(b).css(&quot;zIndex&quot;),10) || o.stack.min);<br></td></tr
><tr
id=sl_svn2402_745

><td class="source">		});<br></td></tr
><tr
id=sl_svn2402_746

><td class="source"><br></td></tr
><tr
id=sl_svn2402_747

><td class="source">		$(group).each(function(i) {<br></td></tr
><tr
id=sl_svn2402_748

><td class="source">			this.style.zIndex = o.stack.min + i;<br></td></tr
><tr
id=sl_svn2402_749

><td class="source">		});<br></td></tr
><tr
id=sl_svn2402_750

><td class="source"><br></td></tr
><tr
id=sl_svn2402_751

><td class="source">		this[0].style.zIndex = o.stack.min + group.length;<br></td></tr
><tr
id=sl_svn2402_752

><td class="source"><br></td></tr
><tr
id=sl_svn2402_753

><td class="source">	}<br></td></tr
><tr
id=sl_svn2402_754

><td class="source">});<br></td></tr
><tr
id=sl_svn2402_755

><td class="source"><br></td></tr
><tr
id=sl_svn2402_756

><td class="source">$.ui.plugin.add(&quot;draggable&quot;, &quot;zIndex&quot;, {<br></td></tr
><tr
id=sl_svn2402_757

><td class="source">	start: function(event, ui) {<br></td></tr
><tr
id=sl_svn2402_758

><td class="source">		var t = $(ui.helper), o = $(this).data(&quot;draggable&quot;).options;<br></td></tr
><tr
id=sl_svn2402_759

><td class="source">		if(t.css(&quot;zIndex&quot;)) o._zIndex = t.css(&quot;zIndex&quot;);<br></td></tr
><tr
id=sl_svn2402_760

><td class="source">		t.css(&#39;zIndex&#39;, o.zIndex);<br></td></tr
><tr
id=sl_svn2402_761

><td class="source">	},<br></td></tr
><tr
id=sl_svn2402_762

><td class="source">	stop: function(event, ui) {<br></td></tr
><tr
id=sl_svn2402_763

><td class="source">		var o = $(this).data(&quot;draggable&quot;).options;<br></td></tr
><tr
id=sl_svn2402_764

><td class="source">		if(o._zIndex) $(ui.helper).css(&#39;zIndex&#39;, o._zIndex);<br></td></tr
><tr
id=sl_svn2402_765

><td class="source">	}<br></td></tr
><tr
id=sl_svn2402_766

><td class="source">});<br></td></tr
><tr
id=sl_svn2402_767

><td class="source"><br></td></tr
><tr
id=sl_svn2402_768

><td class="source">})(jQuery);<br></td></tr
></table></pre>
<pre class="prettyprint"><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn2402_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn2402_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta('', 'p', 'jquery-ui', this)">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta('', 'p', 'jquery-ui', this)">Hide details</a>
 </div>
 <div class="ifExpand">
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/jquery-ui/source/detail?spec=svn2402&r=2402">r2402</a>
 by scott.gonzalez
 on Mar 30, 2009
 &nbsp; <a href="/p/jquery-ui/source/diff?spec=svn2402&r=2402&amp;format=side&amp;path=/branches/dev/widget-factory/ui/ui.draggable.js&amp;old_path=/branches/dev/widget-factory/ui/ui.draggable.js&amp;old=2398">Diff</a>
 </div>
 <pre>Draggable: refactored for auto-detection
of getters.</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/jquery-ui/source/detail?r=2402&spec=svn2402';
 var publish_url = '/p/jquery-ui/source/detail?r=2402&spec=svn2402#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/branches/dev/widget-factory/ui/ui.draggable.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/dev/widget-factory/ui/ui.draggable.js?r\x3d2402\x26spec\x3dsvn2402');
 
 var selected_path = '/branches/dev/widget-factory/ui/ui.draggable.js';
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/jquery-ui/source/browse/branches/dev/widget-factory/ui/ui.draggable.js?r=2402&amp;spec=svn2402"
 selected="selected"
 >...idget-factory/ui/ui.draggable.js</option>
 
 </select>
 </td></tr></table>
 
 
 



 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/p/jquery-ui/source/detail?spec=svn2402&r=2398">r2398</a>
 by scott.gonzalez
 on Mar 29, 2009
 &nbsp; <a href="/p/jquery-ui/source/diff?spec=svn2402&r=2398&amp;format=side&amp;path=/branches/dev/widget-factory/ui/ui.draggable.js&amp;old_path=/trunk/ui/ui.draggable.js&amp;old=2141">Diff</a>
 <br>
 <pre class="ifOpened">Creating dev branch for widget factory
development.</pre>
 </div>
 
 
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/p/jquery-ui/source/detail?spec=svn2402&r=2141">r2141</a>
 by rdworth
 on Feb 27, 2009
 &nbsp; <a href="/p/jquery-ui/source/diff?spec=svn2402&r=2141&amp;format=side&amp;path=/trunk/ui/ui.draggable.js&amp;old_path=/trunk/ui/ui.draggable.js&amp;old=2076">Diff</a>
 <br>
 <pre class="ifOpened">changed ui.jquery.com to jqueryui.com</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/p/jquery-ui/source/detail?spec=svn2402&r=2076">r2076</a>
 by paul.bakaus
 on Feb 13, 2009
 &nbsp; <a href="/p/jquery-ui/source/diff?spec=svn2402&r=2076&amp;format=side&amp;path=/trunk/ui/ui.draggable.js&amp;old_path=/trunk/ui/ui.draggable.js&amp;old=2075">Diff</a>
 <br>
 <pre class="ifOpened">draggable: pageX/pageY already do not
include scroll offsets in safari,
therefore it does not need to be
substracted again (fixes #4142) (only
if css position is fixed) (removed
...</pre>
 </div>
 
 
 <a href="/p/jquery-ui/source/list?path=/branches/dev/widget-factory/ui/ui.draggable.js&start=2402">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 29085 bytes,
 768 lines</div>
 
 <div><a href="http://jquery-ui.googlecode.com/svn-history/r2402/branches/dev/widget-factory/ui/ui.draggable.js">View raw file</a></div>
 </div>
 
 <div id="props">
 <p>File properties</p>
 <dl>
 
 <dt>svn:mime-type</dt>
 <dd>text/javascript</dd>
 
 <dt>svn:eol-style</dt>
 <dd>native</dd>
 
 </dl>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="http://www.gstatic.com/codesite/ph/3799605220899551948/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="http://www.gstatic.com/codesite/ph/3799605220899551948/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="http://kibbles.googlecode.com/files/kibbles-1.3.3.comp.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initilized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initilized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initilized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initilized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="http://www.gstatic.com/codesite/ph/3799605220899551948/js/code_review_scripts.js"></script>
<script type="text/javascript">
 
 // the comment form template
 var form = '<div class="draft"><div class="header"><span class="title">Draft comment:</span></div>' +
 '<div class="body"><form onsubmit="return false;"><textarea id="$ID">$BODY</textarea><br>$ACTIONS</form></div>' +
 '</div>';
 // the comment "plate" template used for both draft and published comment "plates".
 var draft_comment = '<div class="draft" ondblclick="$ONDBLCLICK">' +
 '<div class="header"><span class="title">Draft comment:</span><span class="actions">$ACTIONS</span></div>' +
 '<pre id="$ID" class="body">$BODY</pre>' +
 '</div>';
 var published_comment = '<div class="published">' +
 '<div class="header"><span class="title"><a href="$PROFILE_URL">$AUTHOR:</a></span><div>' +
 '<pre id="$ID" class="body">$BODY</pre>' +
 '</div>';

 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn2402': '/branches/dev/widget-factory/ui/ui.draggable.js'}
 CR_setup('', 'p', 'jquery-ui', '', 'svn2402', paths,
 '80719b2177d660277db0aa3ee0318eae', CR_BrowseIntegrationFactory);
 // register our hidden ui elements with the code commenting code ui builder.
 CR_registerLayoutElement('form', form);
 CR_registerLayoutElement('draft_comment', draft_comment);
 CR_registerLayoutElement('published_comment', published_comment);
 
 CR_registerActivityListener(CR_ACTIVITY_TYPE.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 CR_registerActivityListener(CR_ACTIVITY_TYPE.REVEAL_PUB_PLATE, pubRevealed);
 CR_registerActivityListener(CR_ACTIVITY_TYPE.REVEAL_DRAFT_PLATE, draftRevealed);
 CR_registerActivityListener(CR_ACTIVITY_TYPE.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initilized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="http://www.gstatic.com/codesite/ph/3799605220899551948/js/dit_scripts.js"></script>

 
 
 <script type="text/javascript" src="http://www.gstatic.com/codesite/ph/3799605220899551948/js/core_scripts_20081103.js"></script>
 <script type="text/javascript" src="/js/codesite_product_dictionary_ph.pack.04102009.js"></script>
 </div>
<div id="footer" dir="ltr">
 
 <div class="text">
 
 &copy;2010 Google -
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 
 </div>
</div>

 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>
 
 


 
 </body>
</html>

