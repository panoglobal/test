// Garden Gnome Software - Skin
// Pano2VR 5.2.2/15983
// Filename: skin.ggsk
// Generated lun. jul. 9 23:52:00 2018

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._introfondo=document.createElement('div');
		this._introfondo.ggId="intro-fondo";
		this._introfondo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._introfondo.ggVisible=true;
		this._introfondo.className='ggskin ggskin_rectangle ';
		this._introfondo.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.333333);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._introfondo.setAttribute('style',hs);
		this._introfondo.style[domTransform + 'Origin']='50% 50%';
		me._introfondo.ggIsActive=function() {
			return false;
		}
		me._introfondo.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._introfondo.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._introfondo);
		this._introresena=document.createElement('div');
		this._introresena__text=document.createElement('div');
		this._introresena.className='ggskin ggskin_textdiv';
		this._introresena.ggTextDiv=this._introresena__text;
		this._introresena.ggId="intro-resena";
		this._introresena.ggLeft=-411;
		this._introresena.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._introresena.ggVisible=true;
		this._introresena.className='ggskin ggskin_text ';
		this._introresena.ggType='text';
		hs ='';
		hs+='height : 142px;';
		hs+='left : -411px;';
		hs+='position : absolute;';
		hs+='top : 56.83%;';
		hs+='visibility : inherit;';
		hs+='width : 820px;';
		hs+='pointer-events:auto;';
		this._introresena.setAttribute('style',hs);
		this._introresena.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 820px;';
		hs+='height: 142px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._introresena__text.setAttribute('style',hs);
		this._introresena__text.innerHTML="<span style=\"font-family: Raleway; font-weight: 300; font-size: 16px;\">Bienvenido a Tiquipaya la capital de las flores un rincon ecologico en Cochabamba lleno de naturaleza y buen clima sus espacios turisticos son unicos en la region estamos contentos de recibir a todos los visitantes y agradecidos de que usted tenga una experiencia sobreacojedora<\/span>";
		this._introresena.appendChild(this._introresena__text);
		me._introresena.ggIsActive=function() {
			return false;
		}
		me._introresena.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._introresena.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
		}
		this.divSkin.appendChild(this._introresena);
		this._introsubname=document.createElement('div');
		this._introsubname__text=document.createElement('div');
		this._introsubname.className='ggskin ggskin_textdiv';
		this._introsubname.ggTextDiv=this._introsubname__text;
		this._introsubname.ggId="intro-subname";
		this._introsubname.ggLeft=-200;
		this._introsubname.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._introsubname.ggVisible=true;
		this._introsubname.className='ggskin ggskin_text ';
		this._introsubname.ggType='text';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -200px;';
		hs+='position : absolute;';
		hs+='top : 26.77%;';
		hs+='visibility : inherit;';
		hs+='width : 398px;';
		hs+='pointer-events:auto;';
		this._introsubname.setAttribute('style',hs);
		this._introsubname.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 398px;';
		hs+='height: 30px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._introsubname__text.setAttribute('style',hs);
		this._introsubname__text.innerHTML="<span style=\"font-family: Raleway; font-weight: 400; font-size: 25px;\">COCHABAMBA \u2192 BOLIVIA<\/span>";
		this._introsubname.appendChild(this._introsubname__text);
		me._introsubname.ggIsActive=function() {
			return false;
		}
		me._introsubname.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._introsubname.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
		}
		this.divSkin.appendChild(this._introsubname);
		this._introname=document.createElement('div');
		this._introname__text=document.createElement('div');
		this._introname.className='ggskin ggskin_textdiv';
		this._introname.ggTextDiv=this._introname__text;
		this._introname.ggId="intro-name";
		this._introname.ggLeft=-184;
		this._introname.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._introname.ggVisible=true;
		this._introname.className='ggskin ggskin_text ';
		this._introname.ggType='text';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -184px;';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 366px;';
		hs+='pointer-events:auto;';
		this._introname.setAttribute('style',hs);
		this._introname.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 366px;';
		hs+='height: 90px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._introname__text.setAttribute('style',hs);
		this._introname__text.innerHTML="<span style=\"font-family: Raleway; font-weight: 600; font-size: 72px;\">TIQUIPAYA<\/span>";
		this._introname.appendChild(this._introname__text);
		me._introname.ggIsActive=function() {
			return false;
		}
		me._introname.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._introname.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
		}
		this.divSkin.appendChild(this._introname);
		this._intrologo=document.createElement('div');
		this._intrologo__img=document.createElement('img');
		this._intrologo__img.className='ggskin ggskin_svg';
		this._intrologo__img.setAttribute('src',basePath + 'images/intrologo.svg');
		this._intrologo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._intrologo__img['ondragstart']=function() { return false; };
		this._intrologo.appendChild(this._intrologo__img);
		this._intrologo.ggId="intro-logo";
		this._intrologo.ggLeft=-171;
		this._intrologo.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
		this._intrologo.ggVisible=true;
		this._intrologo.className='ggskin ggskin_svg ';
		this._intrologo.ggType='svg';
		hs ='';
		hs+='height : 46px;';
		hs+='left : -171px;';
		hs+='position : absolute;';
		hs+='top : 3.92%;';
		hs+='visibility : inherit;';
		hs+='width : 342px;';
		hs+='pointer-events:auto;';
		this._intrologo.setAttribute('style',hs);
		this._intrologo.style[domTransform + 'Origin']='50% 50%';
		this._intrologo.style[domTransform]=parameterToTransform(this._intrologo.ggParameter);
		me._intrologo.ggIsActive=function() {
			return false;
		}
		me._intrologo.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._intrologo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
		}
		this.divSkin.appendChild(this._intrologo);
		this._espanol=document.createElement('div');
		this._espanol__text=document.createElement('div');
		this._espanol.className='ggskin ggskin_textdiv';
		this._espanol.ggTextDiv=this._espanol__text;
		this._espanol.ggId="espanol";
		this._espanol.ggLeft=-110;
		this._espanol.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._espanol.ggVisible=true;
		this._espanol.className='ggskin ggskin_text ';
		this._espanol.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -110px;';
		hs+='position : absolute;';
		hs+='top : 92%;';
		hs+='visibility : inherit;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		this._espanol.setAttribute('style',hs);
		this._espanol.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		this._espanol__text.setAttribute('style',hs);
		this._espanol__text.innerHTML="<span style=\"font-family: Raleway; font-weight: 400; font-size: 16px;\">ESPA\xd1OL \u2192<\/span>";
		this._espanol.appendChild(this._espanol__text);
		me._espanol.ggIsActive=function() {
			return false;
		}
		me._espanol.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._espanol.onmouseover=function (e) {
			me.elementMouseOver['espanol']=true;
		}
		this._espanol.onmouseout=function (e) {
			me.elementMouseOver['espanol']=false;
		}
		this._espanol.ontouchend=function (e) {
			me.elementMouseOver['espanol']=false;
		}
		me._espanol.ggCurrentLogicStateBackgroundColor = -1;
		this._espanol.ggUpdateConditionTimer=function () {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['espanol'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._espanol.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._espanol.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._espanol__text.style[domTransition]='background-color none';
				if (me._espanol.ggCurrentLogicStateBackgroundColor == 0) {
					me._espanol__text.style.backgroundColor="rgba(0,0,0,0.392157)";
				}
				else {
					me._espanol__text.style.backgroundColor="rgba(0,0,0,0)";
				}
			}
		}
		this._espanol.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
		}
		this.divSkin.appendChild(this._espanol);
		this._quechua=document.createElement('div');
		this._quechua__text=document.createElement('div');
		this._quechua.className='ggskin ggskin_textdiv';
		this._quechua.ggTextDiv=this._quechua__text;
		this._quechua.ggId="quechua";
		this._quechua.ggLeft=10;
		this._quechua.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._quechua.ggVisible=true;
		this._quechua.className='ggskin ggskin_text ';
		this._quechua.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 92%;';
		hs+='visibility : inherit;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		this._quechua.setAttribute('style',hs);
		this._quechua.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		this._quechua__text.setAttribute('style',hs);
		this._quechua__text.innerHTML="<span style=\"font-family: Raleway; font-weight: 400; font-size: 16px;\">QUECHUA \u2192<\/span>";
		this._quechua.appendChild(this._quechua__text);
		me._quechua.ggIsActive=function() {
			return false;
		}
		me._quechua.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._quechua.onmouseover=function (e) {
			me.elementMouseOver['quechua']=true;
		}
		this._quechua.onmouseout=function (e) {
			me.elementMouseOver['quechua']=false;
		}
		this._quechua.ontouchend=function (e) {
			me.elementMouseOver['quechua']=false;
		}
		me._quechua.ggCurrentLogicStateBackgroundColor = -1;
		this._quechua.ggUpdateConditionTimer=function () {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['quechua'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._quechua.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._quechua.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._quechua__text.style[domTransition]='background-color none';
				if (me._quechua.ggCurrentLogicStateBackgroundColor == 0) {
					me._quechua__text.style.backgroundColor="rgba(0,0,0,0.392157)";
				}
				else {
					me._quechua__text.style.backgroundColor="rgba(0,0,0,0)";
				}
			}
		}
		this._quechua.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
		}
		this.divSkin.appendChild(this._quechua);
		this._containerboton=document.createElement('div');
		this._containerboton.ggId="Container-boton";
		this._containerboton.ggLeft=-90;
		this._containerboton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._containerboton.ggVisible=true;
		this._containerboton.className='ggskin ggskin_container ';
		this._containerboton.ggType='container';
		hs ='';
		hs+='height : 48px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : 73.75%;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:none;';
		this._containerboton.setAttribute('style',hs);
		this._containerboton.style[domTransform + 'Origin']='50% 50%';
		me._containerboton.ggIsActive=function() {
			return false;
		}
		me._containerboton.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._containerboton.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
		}
		this._introboton=document.createElement('div');
		this._introboton__text=document.createElement('div');
		this._introboton.className='ggskin ggskin_textdiv';
		this._introboton.ggTextDiv=this._introboton__text;
		this._introboton.ggId="intro-boton";
		this._introboton.ggLeft=-90;
		this._introboton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._introboton.ggVisible=true;
		this._introboton.className='ggskin ggskin_text ';
		this._introboton.ggType='text';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : 0.42%;';
		hs+='visibility : inherit;';
		hs+='width : 166px;';
		hs+='pointer-events:auto;';
		this._introboton.setAttribute('style',hs);
		this._introboton.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #00ec32;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 25px;';
		hs+=cssPrefix + 'border-radius: 25px;';
		hs+='color: rgba(24,68,33,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 15px 55px 15px 55px;';
		hs+='overflow: hidden;';
		this._introboton__text.setAttribute('style',hs);
		this._introboton__text.innerHTML="<span style=\"font-family: Raleway; font-weight: 600; font-size: 16px;\">ENTRAR<\/span>";
		this._introboton.appendChild(this._introboton__text);
		me._introboton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._introboton.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._introboton.onclick=function (e) {
			me.player.stopAutorotate();
			me._espanol.style[domTransition]='none';
			me._espanol.style.visibility='hidden';
			me._espanol.ggVisible=false;
			me._introboton.style[domTransition]='none';
			me._introboton.style.visibility='hidden';
			me._introboton.ggVisible=false;
			me._introfondo.style[domTransition]='none';
			me._introfondo.style.visibility='hidden';
			me._introfondo.ggVisible=false;
			me._intrologo.style[domTransition]='none';
			me._intrologo.style.visibility='hidden';
			me._intrologo.ggVisible=false;
			me._introname.style[domTransition]='none';
			me._introname.style.visibility='hidden';
			me._introname.ggVisible=false;
			me._introresena.style[domTransition]='none';
			me._introresena.style.visibility='hidden';
			me._introresena.ggVisible=false;
			me._introsubname.style[domTransition]='none';
			me._introsubname.style.visibility='hidden';
			me._introsubname.ggVisible=false;
			me._quechua.style[domTransition]='none';
			me._quechua.style.visibility='hidden';
			me._quechua.ggVisible=false;
			var params = {
						   pan: -13.4,
						   tilt: -23.77,
						   fov: 35,
						   projection: 4,
						   timingFunction: 0,
						   speed: 3
			};
			me.player.moveToEx(params);
		}
		this._introboton.onmouseover=function (e) {
			me.elementMouseOver['introboton']=true;
		}
		this._introboton.onmouseout=function (e) {
			me.elementMouseOver['introboton']=false;
		}
		this._introboton.ontouchend=function (e) {
			me.elementMouseOver['introboton']=false;
		}
		me._introboton.ggCurrentLogicStateBackgroundColor = -1;
		this._introboton.ggUpdateConditionTimer=function () {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['introboton'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._introboton.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._introboton.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._introboton__text.style[domTransition]='background-color none';
				if (me._introboton.ggCurrentLogicStateBackgroundColor == 0) {
					me._introboton__text.style.backgroundColor="rgba(110,255,134,1)";
				}
				else {
					me._introboton__text.style.backgroundColor="rgba(0,236,50,1)";
				}
			}
		}
		this._introboton.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((178-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._containerboton.appendChild(this._introboton);
		this.divSkin.appendChild(this._containerboton);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseOver['espanol']) {
		}
		me._espanol.ggUpdateConditionTimer();
		if (me.elementMouseOver['quechua']) {
		}
		me._quechua.ggUpdateConditionTimer();
		if (me.elementMouseOver['introboton']) {
		}
		me._introboton.ggUpdateConditionTimer();
	};
	this.addSkin();
};