document.addEventListener("DOMContentLoaded",function(e){if(document.querySelector('[data-barba="container"]')){pageTransitionsFrontend()}});function pageTransitionsFrontend(){const transitionsArray=[];const dynamicRoutes={};var jsonString=data_pagetransitions.data_pagetransitions.replace(/\\/g,"");var JSONobject=JSON.parse(jsonString);JSONobject.animator.folders.map((folder)=>{folder.folder.timelines.map((timeline,index)=>{var timeline=timeline.timeline;var leftGSAPtimeline=createTimeline(leftGSAPtimeline);var rightGSAPtimeline=createTimeline(rightGSAPtimeline);function createTimeline(GSAPtimeline){GSAPtimeline=gsap.timeline({paused:!0,});return GSAPtimeline}
function createLeftAnimation(animation,currentContainer){var animation=animation.animation;switch(animation.method){case "from":var animationFromConfig={duration:Number(animation.duration)};if(animation.delay){animationFromConfig.delay=Number(animation.delay)}
if(animation.easing){animationFromConfig.ease=animation.easing}
if(animation.staggerEnabled=="true"){animationFromConfig.stagger=animation.stagger}
if(animation.repeatEnabled=="true"){animationFromConfig.repeat=Number(animation.repeat)}
if(animation.yoyoEnabled=="true"){animationFromConfig.yoyo=!0}
if(animation.fromObject.opacity){animationFromConfig.opacity=animation.fromObject.opacity}
if(animation.fromObject.autoAlpha){animationFromConfig.autoAlpha=animation.fromObject.autoAlpha}
if(animation.fromObject.transformX){animationFromConfig.x=animation.fromObject.transformX}
if(animation.fromObject.transformY){animationFromConfig.y=animation.fromObject.transformY}
if(animation.fromObject.transformScale){animationFromConfig.scale=animation.fromObject.transformScale}
if(animation.fromObject.transformRotate){animationFromConfig.rotation=animation.fromObject.transformRotate}
if(animation.fromObject.transformSkewX){animationFromConfig.skewX=animation.fromObject.transformSkewX}
if(animation.fromObject.transformSkewY){animationFromConfig.skewY=animation.fromObject.transformSkewY}
if(animation.fromObject.background){animationFromConfig.backgroundColor=animation.fromObject.background}
if(animation.fromObject.color){animationFromConfig.color=animation.fromObject.color}
if(animation.fromObject.fontFamily){animationFromConfig.fontFamily=animation.fromObject.fontFamily}
if(animation.fromObject.fontSize){animationFromConfig.fontSize=animation.fromObject.fontSize}
if(animation.fromObject.fontWeight){animationFromConfig.fontWeight=animation.fromObject.fontWeight}
if(animation.fromObject.fontStyle){animationFromConfig.fontStyle=animation.fromObject.fontStyle}
if(animation.fromObject.textAlign){animationFromConfig.textAlign=animation.fromObject.textAlign}
if(animation.fromObject.textDecoration){animationFromConfig.textDecoration=animation.fromObject.textDecoration}
if(animation.fromObject.textTransform){animationFromConfig.textTransform=animation.fromObject.textTransform}
if(animation.fromObject.lineHeight){animationFromConfig.lineHeight=animation.fromObject.lineHeight}
if(animation.fromObject.letterSpacing){animationFromConfig.letterSpacing=animation.fromObject.letterSpacing}
if(animation.fromObject.wordSpacing){animationFromConfig.wordSpacing=animation.fromObject.wordSpacing}
if(animation.fromObject.width){animationFromConfig.width=animation.fromObject.width}
if(animation.fromObject.height){animationFromConfig.height=animation.fromObject.height}
if(animation.fromObject.minWidth){animationFromConfig.minWidth=animation.fromObject.minWidth}
if(animation.fromObject.minHeight){animationFromConfig.minHeight=animation.fromObject.minHeight}
if(animation.fromObject.maxWidth){animationFromConfig.maxWidth=animation.fromObject.maxWidth}
if(animation.fromObject.maxHeight){animationFromConfig.maxHeight=animation.fromObject.maxHeight}
if(animation.fromObject.paddingTop){animationFromConfig.paddingTop=animation.fromObject.paddingTop}
if(animation.fromObject.paddingBottom){animationFromConfig.paddingBottom=animation.fromObject.paddingBottom}
if(animation.fromObject.paddingLeft){animationFromConfig.paddingLeft=animation.fromObject.paddingLeft}
if(animation.fromObject.paddingRight){animationFromConfig.paddingRight=animation.fromObject.paddingRight}
if(animation.fromObject.marginTop){animationFromConfig.marginTop=animation.fromObject.marginTop}
if(animation.fromObject.marginBottom){animationFromConfig.marginBottom=animation.fromObject.marginBottom}
if(animation.fromObject.marginLeft){animationFromConfig.marginLeft=animation.fromObject.marginLeft}
if(animation.fromObject.marginRight){animationFromConfig.marginRight=animation.fromObject.marginRight}
if(animation.fromObject.positionTop){animationFromConfig.top=animation.fromObject.positionTop}
if(animation.fromObject.positionBottom){animationFromConfig.bottom=animation.fromObject.positionBottom}
if(animation.fromObject.positionLeft){animationFromConfig.left=animation.fromObject.positionLeft}
if(animation.fromObject.positionRight){animationFromConfig.right=animation.fromObject.positionRight}
if(animation.fromObject.borderColor){animationFromConfig.borderColor=animation.fromObject.borderColor}
if(animation.fromObject.borderStyle){animationFromConfig.borderStyle=animation.fromObject.borderStyle}
if(animation.fromObject.borderWidthTop){animationFromConfig.borderTopWidth=animation.fromObject.borderWidthTop}
if(animation.fromObject.borderWidthBottom){animationFromConfig.borderBottomWidth=animation.fromObject.borderWidthBottom}
if(animation.fromObject.borderWidthLeft){animationFromConfig.borderLeftWidth=animation.fromObject.borderWidthLeft}
if(animation.fromObject.borderWidthRight){animationFromConfig.borderRightWidth=animation.fromObject.borderWidthRight}
if(animation.fromObject.borderTopLeftRadius){animationFromConfig.borderTopLeftRadius=animation.fromObject.borderTopLeftRadius}
if(animation.fromObject.borderTopRightRadius){animationFromConfig.borderTopRightRadius=animation.fromObject.borderTopRightRadius}
if(animation.fromObject.borderBottomLeftRadius){animationFromConfig.borderBottomLeftRadius=animation.fromObject.borderBottomLeftRadius}
if(animation.fromObject.borderBottomRightRadius){animationFromConfig.borderBottomRightRadius=animation.fromObject.borderBottomRightRadius}
if(animation.fromObject.boxShadowOffsetX&&animation.fromObject.boxShadowOffsetY&&animation.fromObject.boxShadowBlur&&animation.fromObject.boxShadowSpread&&animation.fromObject.boxShadowColor){var boxShadowProperties={offsetX:animation.fromObject.boxShadowOffsetX,offsetY:animation.fromObject.boxShadowOffsetY,blur:animation.fromObject.boxShadowBlur,spread:animation.fromObject.boxShadowSpread,color:animation.fromObject.boxShadowColor,};animationFromConfig.boxShadow=`${boxShadowProperties.offsetX} ${boxShadowProperties.offsetY} ${boxShadowProperties.blur} ${boxShadowProperties.spread} ${boxShadowProperties.color}`}
var filterString="";if(animation.fromObject.filterBlur){filterString+=`blur(${animation.fromObject.filterBlur}) `}
if(animation.fromObject.filterBrightness){filterString+=`brightness(${animation.fromObject.filterBrightness}) `}
if(animation.fromObject.filterContrast){filterString+=`contrast(${animation.fromObject.filterContrast}) `}
if(animation.fromObject.filterGrayscale){filterString+=`grayscale(${animation.fromObject.filterGrayscale}) `}
if(animation.fromObject.filterHueRotate){filterString+=`hue-rotate(${animation.fromObject.filterHueRotate}) `}
if(animation.fromObject.filterInvert){filterString+=`invert(${animation.fromObject.filterInvert}) `}
if(animation.fromObject.filterSaturate){filterString+=`saturate(${animation.fromObject.filterSaturate}) `}
if(animation.fromObject.filterSepia){filterString+=`sepia(${animation.fromObject.filterSepia}) `}
if(filterString!=""){filterString=filterString.trim();animationFromConfig.filter=filterString}
if(animation.fromObject.svgFill){animationFromConfig.fill=animation.fromObject.svgFill}
if(animation.fromObject.svgStrokeColor){animationFromConfig.stroke=animation.fromObject.svgStrokeColor}
if(animation.fromObject.svgStrokeWidth){animationFromConfig.strokeWidth=animation.fromObject.svgStrokeWidth}
if(animation.fromObject.customProperties&&animation.fromObject.customValues){const properties=animation.fromObject.customProperties.split('d110708');const values=animation.fromObject.customValues.split('d110708');properties.forEach((property,index)=>{const value=values[index];if(property!==""&&value!==""){animationFromConfig[property]=value}})}
if(animation.element!=""){var elementToAnimate=animation.element;if(elementToAnimate==timeline.container){elementToAnimate=currentContainer;if(elementToAnimate){if(animation.splitTextEnabled=="true"){new SplitText(elementToAnimate,elementToAnimate.querySelectorAll('*'),{type:animation.splitText,charsClass:`${animation.element}-char nb-animator-char`,wordsClass:`${animation.element}-word nb-animator-word`,linesClass:`${animation.element}-line nb-animator-line`,});if(animation.splitText.includes('char')){leftGSAPtimeline.from(elementToAnimate.getElementsByClassName(`${animation.element}-char`),animationFromConfig,0)}else if(animation.splitText.includes('word')){leftGSAPtimeline.from(elementToAnimate.getElementsByClassName(`${animation.element}-word`),animationFromConfig,0)}else if(animation.splitText.includes('line')){leftGSAPtimeline.from(elementToAnimate.getElementsByClassName(`${animation.element}-line`),animationFromConfig,0)}else{leftGSAPtimeline.from(elementToAnimate,animationFromConfig,0)}}else{leftGSAPtimeline.from(elementToAnimate,animationFromConfig,0)}}}else if(document.querySelector(elementToAnimate)){if(animation.splitTextEnabled=="true"){new SplitText(document.querySelectorAll(`${elementToAnimate}, ${elementToAnimate} *`),{type:animation.splitText,charsClass:`${elementToAnimate}-char nb-animator-char`,wordsClass:`${elementToAnimate}-word nb-animator-word`,linesClass:`${elementToAnimate}-line nb-animator-line`,});if(animation.splitText.includes('char')){leftGSAPtimeline.from(document.getElementsByClassName(`${elementToAnimate}-char`),animationFromConfig,0)}else if(animation.splitText.includes('word')){leftGSAPtimeline.from(document.getElementsByClassName(`${elementToAnimate}-word`),animationFromConfig,0)}else if(animation.splitText.includes('line')){leftGSAPtimeline.from(document.getElementsByClassName(`${elementToAnimate}-line`),animationFromConfig,0)}else{leftGSAPtimeline.from(elementToAnimate,animationFromConfig,0)}}else{leftGSAPtimeline.from(elementToAnimate,animationFromConfig,0)}}}
break;case "to":var animationToConfig={duration:Number(animation.duration)};if(animation.delay){animationToConfig.delay=Number(animation.delay)}
if(animation.easing){animationToConfig.ease=animation.easing}
if(animation.staggerEnabled=="true"){animationToConfig.stagger=animation.stagger}
if(animation.repeatEnabled=="true"){animationToConfig.repeat=Number(animation.repeat)}
if(animation.yoyoEnabled=="true"){animationToConfig.yoyo=!0}
if(animation.toObject.opacity){animationToConfig.opacity=animation.toObject.opacity}
if(animation.toObject.autoAlpha){animationToConfig.autoAlpha=animation.toObject.autoAlpha}
if(animation.toObject.transformX){animationToConfig.x=animation.toObject.transformX}
if(animation.toObject.transformY){animationToConfig.y=animation.toObject.transformY}
if(animation.toObject.transformScale){animationToConfig.scale=animation.toObject.transformScale}
if(animation.toObject.transformRotate){animationToConfig.rotation=animation.toObject.transformRotate}
if(animation.toObject.transformSkewX){animationToConfig.skewX=animation.toObject.transformSkewX}
if(animation.toObject.transformSkewY){animationToConfig.skewY=animation.toObject.transformSkewY}
if(animation.toObject.background){animationToConfig.backgroundColor=animation.toObject.background}
if(animation.toObject.color){animationToConfig.color=animation.toObject.color}
if(animation.toObject.fontFamily){animationToConfig.fontFamily=animation.toObject.fontFamily}
if(animation.toObject.fontSize){animationToConfig.fontSize=animation.toObject.fontSize}
if(animation.toObject.fontWeight){animationToConfig.fontWeight=animation.toObject.fontWeight}
if(animation.toObject.fontStyle){animationToConfig.fontStyle=animation.toObject.fontStyle}
if(animation.toObject.textAlign){animationToConfig.textAlign=animation.toObject.textAlign}
if(animation.toObject.textDecoration){animationToConfig.textDecoration=animation.toObject.textDecoration}
if(animation.toObject.textTransform){animationToConfig.textTransform=animation.toObject.textTransform}
if(animation.toObject.lineHeight){animationToConfig.lineHeight=animation.toObject.lineHeight}
if(animation.toObject.letterSpacing){animationToConfig.letterSpacing=animation.toObject.letterSpacing}
if(animation.toObject.wordSpacing){animationToConfig.wordSpacing=animation.toObject.wordSpacing}
if(animation.toObject.width){animationToConfig.width=animation.toObject.width}
if(animation.toObject.height){animationToConfig.height=animation.toObject.height}
if(animation.toObject.minWidth){animationToConfig.minWidth=animation.toObject.minWidth}
if(animation.toObject.minHeight){animationToConfig.minHeight=animation.toObject.minHeight}
if(animation.toObject.maxWidth){animationToConfig.maxWidth=animation.toObject.maxWidth}
if(animation.toObject.maxHeight){animationToConfig.maxHeight=animation.toObject.maxHeight}
if(animation.toObject.paddingTop){animationToConfig.paddingTop=animation.toObject.paddingTop}
if(animation.toObject.paddingBottom){animationToConfig.paddingBottom=animation.toObject.paddingBottom}
if(animation.toObject.paddingLeft){animationToConfig.paddingLeft=animation.toObject.paddingLeft}
if(animation.toObject.paddingRight){animationToConfig.paddingRight=animation.toObject.paddingRight}
if(animation.toObject.marginTop){animationToConfig.marginTop=animation.toObject.marginTop}
if(animation.toObject.marginBottom){animationToConfig.marginBottom=animation.toObject.marginBottom}
if(animation.toObject.marginLeft){animationToConfig.marginLeft=animation.toObject.marginLeft}
if(animation.toObject.marginRight){animationToConfig.marginRight=animation.toObject.marginRight}
if(animation.toObject.positionTop){animationToConfig.top=animation.toObject.positionTop}
if(animation.toObject.positionBottom){animationToConfig.bottom=animation.toObject.positionBottom}
if(animation.toObject.positionLeft){animationToConfig.left=animation.toObject.positionLeft}
if(animation.toObject.positionRight){animationToConfig.right=animation.toObject.positionRight}
if(animation.toObject.borderColor){animationToConfig.borderColor=animation.toObject.borderColor}
if(animation.toObject.borderStyle){animationToConfig.borderStyle=animation.toObject.borderStyle}
if(animation.toObject.borderWidthTop){animationToConfig.borderTopWidth=animation.toObject.borderWidthTop}
if(animation.toObject.borderWidthBottom){animationToConfig.borderBottomWidth=animation.toObject.borderWidthBottom}
if(animation.toObject.borderWidthLeft){animationToConfig.borderLeftWidth=animation.toObject.borderWidthLeft}
if(animation.toObject.borderWidthRight){animationToConfig.borderRightWidth=animation.toObject.borderWidthRight}
if(animation.toObject.borderTopLeftRadius){animationToConfig.borderTopLeftRadius=animation.toObject.borderTopLeftRadius}
if(animation.toObject.borderTopRightRadius){animationToConfig.borderTopRightRadius=animation.toObject.borderTopRightRadius}
if(animation.toObject.borderBottomLeftRadius){animationToConfig.borderBottomLeftRadius=animation.toObject.borderBottomLeftRadius}
if(animation.toObject.borderBottomRightRadius){animationToConfig.borderBottomRightRadius=animation.toObject.borderBottomRightRadius}
if(animation.toObject.boxShadowOffsetX&&animation.toObject.boxShadowOffsetY&&animation.toObject.boxShadowBlur&&animation.toObject.boxShadowSpread&&animation.toObject.boxShadowColor){var boxShadowProperties={offsetX:animation.toObject.boxShadowOffsetX,offsetY:animation.toObject.boxShadowOffsetY,blur:animation.toObject.boxShadowBlur,spread:animation.toObject.boxShadowSpread,color:animation.toObject.boxShadowColor,};animationToConfig.boxShadow=`${boxShadowProperties.offsetX} ${boxShadowProperties.offsetY} ${boxShadowProperties.blur} ${boxShadowProperties.spread} ${boxShadowProperties.color}`}
var filterString="";if(animation.toObject.filterBlur){filterString+=`blur(${animation.toObject.filterBlur}) `}
if(animation.toObject.filterBrightness){filterString+=`brightness(${animation.toObject.filterBrightness}) `}
if(animation.toObject.filterContrast){filterString+=`contrast(${animation.toObject.filterContrast}) `}
if(animation.toObject.filterGrayscale){filterString+=`grayscale(${animation.toObject.filterGrayscale}) `}
if(animation.toObject.filterHueRotate){filterString+=`hue-rotate(${animation.toObject.filterHueRotate}) `}
if(animation.toObject.filterInvert){filterString+=`invert(${animation.toObject.filterInvert}) `}
if(animation.toObject.filterSaturate){filterString+=`saturate(${animation.toObject.filterSaturate}) `}
if(animation.toObject.filterSepia){filterString+=`sepia(${animation.toObject.filterSepia}) `}
if(filterString!=""){filterString=filterString.trim();animationToConfig.filter=filterString}
if(animation.toObject.svgFill){animationToConfig.fill=animation.toObject.svgFill}
if(animation.toObject.svgStrokeColor){animationToConfig.stroke=animation.toObject.svgStrokeColor}
if(animation.toObject.svgStrokeWidth){animationToConfig.strokeWidth=animation.toObject.svgStrokeWidth}
if(animation.toObject.customProperties&&animation.toObject.customValues){const properties=animation.toObject.customProperties.split('d110708');const values=animation.toObject.customValues.split('d110708');properties.forEach((property,index)=>{const value=values[index];if(property!==""&&value!==""){animationToConfig[property]=value}})}
if(animation.element!=""){var elementToAnimate=animation.element;if(elementToAnimate==timeline.container){elementToAnimate=currentContainer;if(elementToAnimate){if(animation.splitTextEnabled=="true"){new SplitText(elementToAnimate,elementToAnimate.querySelectorAll('*'),{type:animation.splitText,charsClass:`${animation.element}-char nb-animator-char`,wordsClass:`${animation.element}-word nb-animator-word`,linesClass:`${animation.element}-line nb-animator-line`,});if(animation.splitText.includes('char')){leftGSAPtimeline.to(elementToAnimate.getElementsByClassName(`${animation.element}-char`),animationToConfig,0)}else if(animation.splitText.includes('word')){leftGSAPtimeline.to(elementToAnimate.getElementsByClassName(`${animation.element}-word`),animationToConfig,0)}else if(animation.splitText.includes('line')){leftGSAPtimeline.to(elementToAnimate.getElementsByClassName(`${animation.element}-line`),animationToConfig,0)}else{leftGSAPtimeline.to(elementToAnimate,animationToConfig,0)}}else{leftGSAPtimeline.to(elementToAnimate,animationToConfig,0)}}}else if(document.querySelector(elementToAnimate)){if(animation.splitTextEnabled=="true"){new SplitText(document.querySelectorAll(`${elementToAnimate}, ${elementToAnimate} *`),{type:animation.splitText,charsClass:`${elementToAnimate}-char nb-animator-char`,wordsClass:`${elementToAnimate}-word nb-animator-word`,linesClass:`${elementToAnimate}-line nb-animator-line`,});if(animation.splitText.includes('char')){leftGSAPtimeline.to(document.getElementsByClassName(`${elementToAnimate}-char`),animationToConfig,0)}else if(animation.splitText.includes('word')){leftGSAPtimeline.to(document.getElementsByClassName(`${elementToAnimate}-word`),animationToConfig,0)}else if(animation.splitText.includes('line')){leftGSAPtimeline.to(document.getElementsByClassName(`${elementToAnimate}-line`),animationToConfig,0)}else{leftGSAPtimeline.to(elementToAnimate,animationToConfig,0)}}else{leftGSAPtimeline.to(elementToAnimate,animationToConfig,0)}}}
break;case "fromto":var animationFromToToConfig={duration:Number(animation.duration)};if(animation.delay){animationFromToToConfig.delay=Number(animation.delay)}
if(animation.easing){animationFromToToConfig.ease=animation.easing}
if(animation.staggerEnabled=="true"){animationFromToToConfig.stagger=animation.stagger}
if(animation.repeatEnabled=="true"){animationFromToToConfig.repeat=Number(animation.repeat)}
if(animation.yoyoEnabled=="true"){animationFromToToConfig.yoyo=!0}
if(animation.fromtotoObject.opacity){animationFromToToConfig.opacity=animation.fromtotoObject.opacity}
if(animation.fromtotoObject.autoAlpha){animationFromToToConfig.autoAlpha=animation.fromtotoObject.autoAlpha}
if(animation.fromtotoObject.transformX){animationFromToToConfig.x=animation.fromtotoObject.transformX}
if(animation.fromtotoObject.transformY){animationFromToToConfig.y=animation.fromtotoObject.transformY}
if(animation.fromtotoObject.transformScale){animationFromToToConfig.scale=animation.fromtotoObject.transformScale}
if(animation.fromtotoObject.transformRotate){animationFromToToConfig.rotation=animation.fromtotoObject.transformRotate}
if(animation.fromtotoObject.transformSkewX){animationFromToToConfig.skewX=animation.fromtotoObject.transformSkewX}
if(animation.fromtotoObject.transformSkewY){animationFromToToConfig.skewY=animation.fromtotoObject.transformSkewY}
if(animation.fromtotoObject.background){animationFromToToConfig.backgroundColor=animation.fromtotoObject.background}
if(animation.fromtotoObject.color){animationFromToToConfig.color=animation.fromtotoObject.color}
if(animation.fromtotoObject.fontFamily){animationFromToToConfig.fontFamily=animation.fromtotoObject.fontFamily}
if(animation.fromtotoObject.fontSize){animationFromToToConfig.fontSize=animation.fromtotoObject.fontSize}
if(animation.fromtotoObject.fontWeight){animationFromToToConfig.fontWeight=animation.fromtotoObject.fontWeight}
if(animation.fromtotoObject.fontStyle){animationFromToToConfig.fontStyle=animation.fromtotoObject.fontStyle}
if(animation.fromtotoObject.textAlign){animationFromToToConfig.textAlign=animation.fromtotoObject.textAlign}
if(animation.fromtotoObject.textDecoration){animationFromToToConfig.textDecoration=animation.fromtotoObject.textDecoration}
if(animation.fromtotoObject.textTransform){animationFromToToConfig.textTransform=animation.fromtotoObject.textTransform}
if(animation.fromtotoObject.lineHeight){animationFromToToConfig.lineHeight=animation.fromtotoObject.lineHeight}
if(animation.fromtotoObject.letterSpacing){animationFromToToConfig.letterSpacing=animation.fromtotoObject.letterSpacing}
if(animation.fromtotoObject.wordSpacing){animationFromToToConfig.wordSpacing=animation.fromtotoObject.wordSpacing}
if(animation.fromtotoObject.width){animationFromToToConfig.width=animation.fromtotoObject.width}
if(animation.fromtotoObject.height){animationFromToToConfig.height=animation.fromtotoObject.height}
if(animation.fromtotoObject.minWidth){animationFromToToConfig.minWidth=animation.fromtotoObject.minWidth}
if(animation.fromtotoObject.minHeight){animationFromToToConfig.minHeight=animation.fromtotoObject.minHeight}
if(animation.fromtotoObject.maxWidth){animationFromToToConfig.maxWidth=animation.fromtotoObject.maxWidth}
if(animation.fromtotoObject.maxHeight){animationFromToToConfig.maxHeight=animation.fromtotoObject.maxHeight}
if(animation.fromtotoObject.paddingTop){animationFromToToConfig.paddingTop=animation.fromtotoObject.paddingTop}
if(animation.fromtotoObject.paddingBottom){animationFromToToConfig.paddingBottom=animation.fromtotoObject.paddingBottom}
if(animation.fromtotoObject.paddingLeft){animationFromToToConfig.paddingLeft=animation.fromtotoObject.paddingLeft}
if(animation.fromtotoObject.paddingRight){animationFromToToConfig.paddingRight=animation.fromtotoObject.paddingRight}
if(animation.fromtotoObject.marginTop){animationFromToToConfig.marginTop=animation.fromtotoObject.marginTop}
if(animation.fromtotoObject.marginBottom){animationFromToToConfig.marginBottom=animation.fromtotoObject.marginBottom}
if(animation.fromtotoObject.marginLeft){animationFromToToConfig.marginLeft=animation.fromtotoObject.marginLeft}
if(animation.fromtotoObject.marginRight){animationFromToToConfig.marginRight=animation.fromtotoObject.marginRight}
if(animation.fromtotoObject.positionTop){animationFromToToConfig.top=animation.fromtotoObject.positionTop}
if(animation.fromtotoObject.positionBottom){animationFromToToConfig.bottom=animation.fromtotoObject.positionBottom}
if(animation.fromtotoObject.positionLeft){animationFromToToConfig.left=animation.fromtotoObject.positionLeft}
if(animation.fromtotoObject.positionRight){animationFromToToConfig.right=animation.fromtotoObject.positionRight}
if(animation.fromtotoObject.borderColor){animationFromToToConfig.borderColor=animation.fromtotoObject.borderColor}
if(animation.fromtotoObject.borderStyle){animationFromToToConfig.borderStyle=animation.fromtotoObject.borderStyle}
if(animation.fromtotoObject.borderWidthTop){animationFromToToConfig.borderTopWidth=animation.fromtotoObject.borderWidthTop}
if(animation.fromtotoObject.borderWidthBottom){animationFromToToConfig.borderBottomWidth=animation.fromtotoObject.borderWidthBottom}
if(animation.fromtotoObject.borderWidthLeft){animationFromToToConfig.borderLeftWidth=animation.fromtotoObject.borderWidthLeft}
if(animation.fromtotoObject.borderWidthRight){animationFromToToConfig.borderRightWidth=animation.fromtotoObject.borderWidthRight}
if(animation.fromtotoObject.borderTopLeftRadius){animationFromToToConfig.borderTopLeftRadius=animation.fromtotoObject.borderTopLeftRadius}
if(animation.fromtotoObject.borderTopRightRadius){animationFromToToConfig.borderTopRightRadius=animation.fromtotoObject.borderTopRightRadius}
if(animation.fromtotoObject.borderBottomLeftRadius){animationFromToToConfig.borderBottomLeftRadius=animation.fromtotoObject.borderBottomLeftRadius}
if(animation.fromtotoObject.borderBottomRightRadius){animationFromToToConfig.borderBottomRightRadius=animation.fromtotoObject.borderBottomRightRadius}
if(animation.fromtotoObject.boxShadowOffsetX&&animation.fromtotoObject.boxShadowOffsetY&&animation.fromtotoObject.boxShadowBlur&&animation.fromtotoObject.boxShadowSpread&&animation.fromtotoObject.boxShadowColor){var boxShadowProperties={offsetX:animation.fromtotoObject.boxShadowOffsetX,offsetY:animation.fromtotoObject.boxShadowOffsetY,blur:animation.fromtotoObject.boxShadowBlur,spread:animation.fromtotoObject.boxShadowSpread,color:animation.fromtotoObject.boxShadowColor,};animationFromToToConfig.boxShadow=`${boxShadowProperties.offsetX} ${boxShadowProperties.offsetY} ${boxShadowProperties.blur} ${boxShadowProperties.spread} ${boxShadowProperties.color}`}
var filterString="";if(animation.fromtotoObject.filterBlur){filterString+=`blur(${animation.fromtotoObject.filterBlur}) `}
if(animation.fromtotoObject.filterBrightness){filterString+=`brightness(${animation.fromtotoObject.filterBrightness}) `}
if(animation.fromtotoObject.filterContrast){filterString+=`contrast(${animation.fromtotoObject.filterContrast}) `}
if(animation.fromtotoObject.filterGrayscale){filterString+=`grayscale(${animation.fromtotoObject.filterGrayscale}) `}
if(animation.fromtotoObject.filterHueRotate){filterString+=`hue-rotate(${animation.fromtotoObject.filterHueRotate}) `}
if(animation.fromtotoObject.filterInvert){filterString+=`invert(${animation.fromtotoObject.filterInvert}) `}
if(animation.fromtotoObject.filterSaturate){filterString+=`saturate(${animation.fromtotoObject.filterSaturate}) `}
if(animation.fromtotoObject.filterSepia){filterString+=`sepia(${animation.fromtotoObject.filterSepia}) `}
if(filterString!=""){filterString=filterString.trim();animationFromToToConfig.filter=filterString}
if(animation.fromtotoObject.svgFill){animationFromToToConfig.fill=animation.fromtotoObject.svgFill}
if(animation.fromtotoObject.svgStrokeColor){animationFromToToConfig.stroke=animation.fromtotoObject.svgStrokeColor}
if(animation.fromtotoObject.svgStrokeWidth){animationFromToToConfig.strokeWidth=animation.fromtotoObject.svgStrokeWidth}
if(animation.fromtotoObject.customProperties&&animation.fromtotoObject.customValues){const properties=animation.fromtotoObject.customProperties.split('d110708');const values=animation.fromtotoObject.customValues.split('d110708');properties.forEach((property,index)=>{const value=values[index];if(property!==""&&value!==""){animationFromToToConfig[property]=value}})}
var animationFromToFromConfig={};if(animation.fromtofromObject.opacity){animationFromToFromConfig.opacity=animation.fromtofromObject.opacity}
if(animation.fromtofromObject.autoAlpha){animationFromToFromConfig.autoAlpha=animation.fromtofromObject.autoAlpha}
if(animation.fromtofromObject.transformX){animationFromToFromConfig.x=animation.fromtofromObject.transformX}
if(animation.fromtofromObject.transformY){animationFromToFromConfig.y=animation.fromtofromObject.transformY}
if(animation.fromtofromObject.transformScale){animationFromToFromConfig.scale=animation.fromtofromObject.transformScale}
if(animation.fromtofromObject.transformRotate){animationFromToFromConfig.rotation=animation.fromtofromObject.transformRotate}
if(animation.fromtofromObject.transformSkewX){animationFromToFromConfig.skewX=animation.fromtofromObject.transformSkewX}
if(animation.fromtofromObject.transformSkewY){animationFromToFromConfig.skewY=animation.fromtofromObject.transformSkewY}
if(animation.fromtofromObject.background){animationFromToFromConfig.backgroundColor=animation.fromtofromObject.background}
if(animation.fromtofromObject.color){animationFromToFromConfig.color=animation.fromtofromObject.color}
if(animation.fromtofromObject.fontFamily){animationFromToFromConfig.fontFamily=animation.fromtofromObject.fontFamily}
if(animation.fromtofromObject.fontSize){animationFromToFromConfig.fontSize=animation.fromtofromObject.fontSize}
if(animation.fromtofromObject.fontWeight){animationFromToFromConfig.fontWeight=animation.fromtofromObject.fontWeight}
if(animation.fromtofromObject.fontStyle){animationFromToFromConfig.fontStyle=animation.fromtofromObject.fontStyle}
if(animation.fromtofromObject.textAlign){animationFromToFromConfig.textAlign=animation.fromtofromObject.textAlign}
if(animation.fromtofromObject.textDecoration){animationFromToFromConfig.textDecoration=animation.fromtofromObject.textDecoration}
if(animation.fromtofromObject.textTransform){animationFromToFromConfig.textTransform=animation.fromtofromObject.textTransform}
if(animation.fromtofromObject.lineHeight){animationFromToFromConfig.lineHeight=animation.fromtofromObject.lineHeight}
if(animation.fromtofromObject.letterSpacing){animationFromToFromConfig.letterSpacing=animation.fromtofromObject.letterSpacing}
if(animation.fromtofromObject.wordSpacing){animationFromToFromConfig.wordSpacing=animation.fromtofromObject.wordSpacing}
if(animation.fromtofromObject.width){animationFromToFromConfig.width=animation.fromtofromObject.width}
if(animation.fromtofromObject.height){animationFromToFromConfig.height=animation.fromtofromObject.height}
if(animation.fromtofromObject.minWidth){animationFromToFromConfig.minWidth=animation.fromtofromObject.minWidth}
if(animation.fromtofromObject.minHeight){animationFromToFromConfig.minHeight=animation.fromtofromObject.minHeight}
if(animation.fromtofromObject.maxWidth){animationFromToFromConfig.maxWidth=animation.fromtofromObject.maxWidth}
if(animation.fromtofromObject.maxHeight){animationFromToFromConfig.maxHeight=animation.fromtofromObject.maxHeight}
if(animation.fromtofromObject.paddingTop){animationFromToFromConfig.paddingTop=animation.fromtofromObject.paddingTop}
if(animation.fromtofromObject.paddingBottom){animationFromToFromConfig.paddingBottom=animation.fromtofromObject.paddingBottom}
if(animation.fromtofromObject.paddingLeft){animationFromToFromConfig.paddingLeft=animation.fromtofromObject.paddingLeft}
if(animation.fromtofromObject.paddingRight){animationFromToFromConfig.paddingRight=animation.fromtofromObject.paddingRight}
if(animation.fromtofromObject.marginTop){animationFromToFromConfig.marginTop=animation.fromtofromObject.marginTop}
if(animation.fromtofromObject.marginBottom){animationFromToFromConfig.marginBottom=animation.fromtofromObject.marginBottom}
if(animation.fromtofromObject.marginLeft){animationFromToFromConfig.marginLeft=animation.fromtofromObject.marginLeft}
if(animation.fromtofromObject.marginRight){animationFromToFromConfig.marginRight=animation.fromtofromObject.marginRight}
if(animation.fromtofromObject.positionTop){animationFromToFromConfig.top=animation.fromtofromObject.positionTop}
if(animation.fromtofromObject.positionBottom){animationFromToFromConfig.bottom=animation.fromtofromObject.positionBottom}
if(animation.fromtofromObject.positionLeft){animationFromToFromConfig.left=animation.fromtofromObject.positionLeft}
if(animation.fromtofromObject.positionRight){animationFromToFromConfig.right=animation.fromtofromObject.positionRight}
if(animation.fromtofromObject.borderColor){animationFromToFromConfig.borderColor=animation.fromtofromObject.borderColor}
if(animation.fromtofromObject.borderStyle){animationFromToFromConfig.borderStyle=animation.fromtofromObject.borderStyle}
if(animation.fromtofromObject.borderWidthTop){animationFromToFromConfig.borderTopWidth=animation.fromtofromObject.borderWidthTop}
if(animation.fromtofromObject.borderWidthBottom){animationFromToFromConfig.borderBottomWidth=animation.fromtofromObject.borderWidthBottom}
if(animation.fromtofromObject.borderWidthLeft){animationFromToFromConfig.borderLeftWidth=animation.fromtofromObject.borderWidthLeft}
if(animation.fromtofromObject.borderWidthRight){animationFromToFromConfig.borderRightWidth=animation.fromtofromObject.borderWidthRight}
if(animation.fromtofromObject.borderTopLeftRadius){animationFromToFromConfig.borderTopLeftRadius=animation.fromtofromObject.borderTopLeftRadius}
if(animation.fromtofromObject.borderTopRightRadius){animationFromToFromConfig.borderTopRightRadius=animation.fromtofromObject.borderTopRightRadius}
if(animation.fromtofromObject.borderBottomLeftRadius){animationFromToFromConfig.borderBottomLeftRadius=animation.fromtofromObject.borderBottomLeftRadius}
if(animation.fromtofromObject.borderBottomRightRadius){animationFromToFromConfig.borderBottomRightRadius=animation.fromtofromObject.borderBottomRightRadius}
if(animation.fromtofromObject.boxShadowOffsetX&&animation.fromtofromObject.boxShadowOffsetY&&animation.fromtofromObject.boxShadowBlur&&animation.fromtofromObject.boxShadowSpread&&animation.fromtofromObject.boxShadowColor){var boxShadowProperties={offsetX:animation.fromtofromObject.boxShadowOffsetX,offsetY:animation.fromtofromObject.boxShadowOffsetY,blur:animation.fromtofromObject.boxShadowBlur,spread:animation.fromtofromObject.boxShadowSpread,color:animation.fromtofromObject.boxShadowColor,};animationFromToFromConfig.boxShadow=`${boxShadowProperties.offsetX} ${boxShadowProperties.offsetY} ${boxShadowProperties.blur} ${boxShadowProperties.spread} ${boxShadowProperties.color}`}
var filterString="";if(animation.fromtofromObject.filterBlur){filterString+=`blur(${animation.fromtofromObject.filterBlur}) `}
if(animation.fromtofromObject.filterBrightness){filterString+=`brightness(${animation.fromtofromObject.filterBrightness}) `}
if(animation.fromtofromObject.filterContrast){filterString+=`contrast(${animation.fromtofromObject.filterContrast}) `}
if(animation.fromtofromObject.filterGrayscale){filterString+=`grayscale(${animation.fromtofromObject.filterGrayscale}) `}
if(animation.fromtofromObject.filterHueRotate){filterString+=`hue-rotate(${animation.fromtofromObject.filterHueRotate}) `}
if(animation.fromtofromObject.filterInvert){filterString+=`invert(${animation.fromtofromObject.filterInvert}) `}
if(animation.fromtofromObject.filterSaturate){filterString+=`saturate(${animation.fromtofromObject.filterSaturate}) `}
if(animation.fromtofromObject.filterSepia){filterString+=`sepia(${animation.fromtofromObject.filterSepia}) `}
if(filterString!=""){filterString=filterString.trim();animationFromToFromConfig.filter=filterString}
if(animation.fromtofromObject.svgFill){animationFromToFromConfig.fill=animation.fromtofromObject.svgFill}
if(animation.fromtofromObject.svgStrokeColor){animationFromToFromConfig.stroke=animation.fromtofromObject.svgStrokeColor}
if(animation.fromtofromObject.svgStrokeWidth){animationFromToFromConfig.strokeWidth=animation.fromtofromObject.svgStrokeWidth}
if(animation.fromtofromObject.customProperties&&animation.fromtofromObject.customValues){const properties=animation.fromtofromObject.customProperties.split('d110708');const values=animation.fromtofromObject.customValues.split('d110708');properties.forEach((property,index)=>{const value=values[index];if(property!==""&&value!==""){animationFromToFromConfig[property]=value}})}
if(animation.element!=""){var elementToAnimate=animation.element;if(elementToAnimate==timeline.container){elementToAnimate=currentContainer;if(elementToAnimate){if(animation.splitTextEnabled=="true"){new SplitText(elementToAnimate,elementToAnimate.querySelectorAll('*'),{type:animation.splitText,charsClass:`${animation.element}-char nb-animator-char`,wordsClass:`${animation.element}-word nb-animator-word`,linesClass:`${animation.element}-line nb-animator-line`,});if(animation.splitText.includes('char')){leftGSAPtimeline.fromTo(elementToAnimate.getElementsByClassName(`${animation.element}-char`),animationFromToFromConfig,animationFromToToConfig,0)}else if(animation.splitText.includes('word')){leftGSAPtimeline.fromTo(elementToAnimate.getElementsByClassName(`${animation.element}-word`),animationFromToFromConfig,animationFromToToConfig,0)}else if(animation.splitText.includes('line')){leftGSAPtimeline.fromTo(elementToAnimate.getElementsByClassName(`${animation.element}-line`),animationFromToFromConfig,animationFromToToConfig,0)}else{leftGSAPtimeline.fromTo(elementToAnimate,animationFromToFromConfig,animationFromToToConfig,0)}}else{leftGSAPtimeline.fromTo(elementToAnimate,animationFromToFromConfig,animationFromToToConfig,0)}}}else if(document.querySelector(elementToAnimate)){if(animation.splitTextEnabled=="true"){new SplitText(document.querySelectorAll(`${elementToAnimate}, ${elementToAnimate} *`),{type:animation.splitText,charsClass:`${elementToAnimate}-char nb-animator-char`,wordsClass:`${elementToAnimate}-word nb-animator-word`,linesClass:`${elementToAnimate}-line nb-animator-line`,});if(animation.splitText.includes('char')){leftGSAPtimeline.fromTo(document.getElementsByClassName(`${elementToAnimate}-char`),animationFromToFromConfig,animationFromToToConfig,0)}else if(animation.splitText.includes('word')){leftGSAPtimeline.fromTo(document.getElementsByClassName(`${elementToAnimate}-word`),animationFromToFromConfig,animationFromToToConfig,0)}else if(animation.splitText.includes('line')){leftGSAPtimeline.fromTo(document.getElementsByClassName(`${elementToAnimate}-line`),animationFromToFromConfig,animationFromToToConfig,0)}else{leftGSAPtimeline.fromTo(elementToAnimate,animationFromToFromConfig,animationFromToToConfig,0)}}else{leftGSAPtimeline.fromTo(elementToAnimate,animationFromToFromConfig,animationFromToToConfig,0)}}}
break}}
function createRightAnimation(animation,nextContainer){var animation=animation.animation;switch(animation.method){case "from":var animationFromConfig={duration:Number(animation.duration)};if(animation.delay){animationFromConfig.delay=Number(animation.delay)}
if(animation.easing){animationFromConfig.ease=animation.easing}
if(animation.staggerEnabled=="true"){animationFromConfig.stagger=animation.stagger}
if(animation.repeatEnabled=="true"){animationFromConfig.repeat=Number(animation.repeat)}
if(animation.yoyoEnabled=="true"){animationFromConfig.yoyo=!0}
if(animation.fromObject.opacity){animationFromConfig.opacity=animation.fromObject.opacity}
if(animation.fromObject.autoAlpha){animationFromConfig.autoAlpha=animation.fromObject.autoAlpha}
if(animation.fromObject.transformX){animationFromConfig.x=animation.fromObject.transformX}
if(animation.fromObject.transformY){animationFromConfig.y=animation.fromObject.transformY}
if(animation.fromObject.transformScale){animationFromConfig.scale=animation.fromObject.transformScale}
if(animation.fromObject.transformRotate){animationFromConfig.rotation=animation.fromObject.transformRotate}
if(animation.fromObject.transformSkewX){animationFromConfig.skewX=animation.fromObject.transformSkewX}
if(animation.fromObject.transformSkewY){animationFromConfig.skewY=animation.fromObject.transformSkewY}
if(animation.fromObject.background){animationFromConfig.backgroundColor=animation.fromObject.background}
if(animation.fromObject.color){animationFromConfig.color=animation.fromObject.color}
if(animation.fromObject.fontFamily){animationFromConfig.fontFamily=animation.fromObject.fontFamily}
if(animation.fromObject.fontSize){animationFromConfig.fontSize=animation.fromObject.fontSize}
if(animation.fromObject.fontWeight){animationFromConfig.fontWeight=animation.fromObject.fontWeight}
if(animation.fromObject.fontStyle){animationFromConfig.fontStyle=animation.fromObject.fontStyle}
if(animation.fromObject.textAlign){animationFromConfig.textAlign=animation.fromObject.textAlign}
if(animation.fromObject.textDecoration){animationFromConfig.textDecoration=animation.fromObject.textDecoration}
if(animation.fromObject.textTransform){animationFromConfig.textTransform=animation.fromObject.textTransform}
if(animation.fromObject.lineHeight){animationFromConfig.lineHeight=animation.fromObject.lineHeight}
if(animation.fromObject.letterSpacing){animationFromConfig.letterSpacing=animation.fromObject.letterSpacing}
if(animation.fromObject.wordSpacing){animationFromConfig.wordSpacing=animation.fromObject.wordSpacing}
if(animation.fromObject.width){animationFromConfig.width=animation.fromObject.width}
if(animation.fromObject.height){animationFromConfig.height=animation.fromObject.height}
if(animation.fromObject.minWidth){animationFromConfig.minWidth=animation.fromObject.minWidth}
if(animation.fromObject.minHeight){animationFromConfig.minHeight=animation.fromObject.minHeight}
if(animation.fromObject.maxWidth){animationFromConfig.maxWidth=animation.fromObject.maxWidth}
if(animation.fromObject.maxHeight){animationFromConfig.maxHeight=animation.fromObject.maxHeight}
if(animation.fromObject.paddingTop){animationFromConfig.paddingTop=animation.fromObject.paddingTop}
if(animation.fromObject.paddingBottom){animationFromConfig.paddingBottom=animation.fromObject.paddingBottom}
if(animation.fromObject.paddingLeft){animationFromConfig.paddingLeft=animation.fromObject.paddingLeft}
if(animation.fromObject.paddingRight){animationFromConfig.paddingRight=animation.fromObject.paddingRight}
if(animation.fromObject.marginTop){animationFromConfig.marginTop=animation.fromObject.marginTop}
if(animation.fromObject.marginBottom){animationFromConfig.marginBottom=animation.fromObject.marginBottom}
if(animation.fromObject.marginLeft){animationFromConfig.marginLeft=animation.fromObject.marginLeft}
if(animation.fromObject.marginRight){animationFromConfig.marginRight=animation.fromObject.marginRight}
if(animation.fromObject.positionTop){animationFromConfig.top=animation.fromObject.positionTop}
if(animation.fromObject.positionBottom){animationFromConfig.bottom=animation.fromObject.positionBottom}
if(animation.fromObject.positionLeft){animationFromConfig.left=animation.fromObject.positionLeft}
if(animation.fromObject.positionRight){animationFromConfig.right=animation.fromObject.positionRight}
if(animation.fromObject.borderColor){animationFromConfig.borderColor=animation.fromObject.borderColor}
if(animation.fromObject.borderStyle){animationFromConfig.borderStyle=animation.fromObject.borderStyle}
if(animation.fromObject.borderWidthTop){animationFromConfig.borderTopWidth=animation.fromObject.borderWidthTop}
if(animation.fromObject.borderWidthBottom){animationFromConfig.borderBottomWidth=animation.fromObject.borderWidthBottom}
if(animation.fromObject.borderWidthLeft){animationFromConfig.borderLeftWidth=animation.fromObject.borderWidthLeft}
if(animation.fromObject.borderWidthRight){animationFromConfig.borderRightWidth=animation.fromObject.borderWidthRight}
if(animation.fromObject.borderTopLeftRadius){animationFromConfig.borderTopLeftRadius=animation.fromObject.borderTopLeftRadius}
if(animation.fromObject.borderTopRightRadius){animationFromConfig.borderTopRightRadius=animation.fromObject.borderTopRightRadius}
if(animation.fromObject.borderBottomLeftRadius){animationFromConfig.borderBottomLeftRadius=animation.fromObject.borderBottomLeftRadius}
if(animation.fromObject.borderBottomRightRadius){animationFromConfig.borderBottomRightRadius=animation.fromObject.borderBottomRightRadius}
if(animation.fromObject.boxShadowOffsetX&&animation.fromObject.boxShadowOffsetY&&animation.fromObject.boxShadowBlur&&animation.fromObject.boxShadowSpread&&animation.fromObject.boxShadowColor){var boxShadowProperties={offsetX:animation.fromObject.boxShadowOffsetX,offsetY:animation.fromObject.boxShadowOffsetY,blur:animation.fromObject.boxShadowBlur,spread:animation.fromObject.boxShadowSpread,color:animation.fromObject.boxShadowColor,};animationFromConfig.boxShadow=`${boxShadowProperties.offsetX} ${boxShadowProperties.offsetY} ${boxShadowProperties.blur} ${boxShadowProperties.spread} ${boxShadowProperties.color}`}
var filterString="";if(animation.fromObject.filterBlur){filterString+=`blur(${animation.fromObject.filterBlur}) `}
if(animation.fromObject.filterBrightness){filterString+=`brightness(${animation.fromObject.filterBrightness}) `}
if(animation.fromObject.filterContrast){filterString+=`contrast(${animation.fromObject.filterContrast}) `}
if(animation.fromObject.filterGrayscale){filterString+=`grayscale(${animation.fromObject.filterGrayscale}) `}
if(animation.fromObject.filterHueRotate){filterString+=`hue-rotate(${animation.fromObject.filterHueRotate}) `}
if(animation.fromObject.filterInvert){filterString+=`invert(${animation.fromObject.filterInvert}) `}
if(animation.fromObject.filterSaturate){filterString+=`saturate(${animation.fromObject.filterSaturate}) `}
if(animation.fromObject.filterSepia){filterString+=`sepia(${animation.fromObject.filterSepia}) `}
if(filterString!=""){filterString=filterString.trim();animationFromConfig.filter=filterString}
if(animation.fromObject.svgFill){animationFromConfig.fill=animation.fromObject.svgFill}
if(animation.fromObject.svgStrokeColor){animationFromConfig.stroke=animation.fromObject.svgStrokeColor}
if(animation.fromObject.svgStrokeWidth){animationFromConfig.strokeWidth=animation.fromObject.svgStrokeWidth}
if(animation.fromObject.customProperties&&animation.fromObject.customValues){const properties=animation.fromObject.customProperties.split('d110708');const values=animation.fromObject.customValues.split('d110708');properties.forEach((property,index)=>{const value=values[index];if(property!==""&&value!==""){animationFromConfig[property]=value}})}
if(animation.element!=""){var elementToAnimate=animation.element;if(elementToAnimate==timeline.container){elementToAnimate=nextContainer;if(elementToAnimate){if(animation.splitTextEnabled=="true"){new SplitText(elementToAnimate,elementToAnimate.querySelectorAll('*'),{type:animation.splitText,charsClass:`${animation.element}-char nb-animator-char`,wordsClass:`${animation.element}-word nb-animator-word`,linesClass:`${animation.element}-line nb-animator-line`,});if(animation.splitText.includes('char')){rightGSAPtimeline.from(elementToAnimate.getElementsByClassName(`${animation.element}-char`),animationFromConfig,0)}else if(animation.splitText.includes('word')){rightGSAPtimeline.from(elementToAnimate.getElementsByClassName(`${animation.element}-word`),animationFromConfig,0)}else if(animation.splitText.includes('line')){rightGSAPtimeline.from(elementToAnimate.getElementsByClassName(`${animation.element}-line`),animationFromConfig,0)}else{rightGSAPtimeline.from(elementToAnimate,animationFromConfig,0)}}else{rightGSAPtimeline.from(elementToAnimate,animationFromConfig,0)}}}else if(document.querySelector(elementToAnimate)){if(animation.splitTextEnabled=="true"){new SplitText(document.querySelectorAll(`${elementToAnimate}, ${elementToAnimate} *`),{type:animation.splitText,charsClass:`${elementToAnimate}-char nb-animator-char`,wordsClass:`${elementToAnimate}-word nb-animator-word`,linesClass:`${elementToAnimate}-line nb-animator-line`,});if(animation.splitText.includes('char')){rightGSAPtimeline.from(document.getElementsByClassName(`${elementToAnimate}-char`),animationFromConfig,0)}else if(animation.splitText.includes('word')){rightGSAPtimeline.from(document.getElementsByClassName(`${elementToAnimate}-word`),animationFromConfig,0)}else if(animation.splitText.includes('line')){rightGSAPtimeline.from(document.getElementsByClassName(`${elementToAnimate}-line`),animationFromConfig,0)}else{rightGSAPtimeline.from(elementToAnimate,animationFromConfig,0)}}else{rightGSAPtimeline.from(elementToAnimate,animationFromConfig,0)}}}
break;case "to":var animationToConfig={duration:Number(animation.duration)};if(animation.delay){animationToConfig.delay=Number(animation.delay)}
if(animation.easing){animationToConfig.ease=animation.easing}
if(animation.staggerEnabled=="true"){animationToConfig.stagger=animation.stagger}
if(animation.repeatEnabled=="true"){animationToConfig.repeat=Number(animation.repeat)}
if(animation.yoyoEnabled=="true"){animationToConfig.yoyo=!0}
if(animation.toObject.opacity){animationToConfig.opacity=animation.toObject.opacity}
if(animation.toObject.autoAlpha){animationToConfig.autoAlpha=animation.toObject.autoAlpha}
if(animation.toObject.transformX){animationToConfig.x=animation.toObject.transformX}
if(animation.toObject.transformY){animationToConfig.y=animation.toObject.transformY}
if(animation.toObject.transformScale){animationToConfig.scale=animation.toObject.transformScale}
if(animation.toObject.transformRotate){animationToConfig.rotation=animation.toObject.transformRotate}
if(animation.toObject.transformSkewX){animationToConfig.skewX=animation.toObject.transformSkewX}
if(animation.toObject.transformSkewY){animationToConfig.skewY=animation.toObject.transformSkewY}
if(animation.toObject.background){animationToConfig.backgroundColor=animation.toObject.background}
if(animation.toObject.color){animationToConfig.color=animation.toObject.color}
if(animation.toObject.fontFamily){animationToConfig.fontFamily=animation.toObject.fontFamily}
if(animation.toObject.fontSize){animationToConfig.fontSize=animation.toObject.fontSize}
if(animation.toObject.fontWeight){animationToConfig.fontWeight=animation.toObject.fontWeight}
if(animation.toObject.fontStyle){animationToConfig.fontStyle=animation.toObject.fontStyle}
if(animation.toObject.textAlign){animationToConfig.textAlign=animation.toObject.textAlign}
if(animation.toObject.textDecoration){animationToConfig.textDecoration=animation.toObject.textDecoration}
if(animation.toObject.textTransform){animationToConfig.textTransform=animation.toObject.textTransform}
if(animation.toObject.lineHeight){animationToConfig.lineHeight=animation.toObject.lineHeight}
if(animation.toObject.letterSpacing){animationToConfig.letterSpacing=animation.toObject.letterSpacing}
if(animation.toObject.wordSpacing){animationToConfig.wordSpacing=animation.toObject.wordSpacing}
if(animation.toObject.width){animationToConfig.width=animation.toObject.width}
if(animation.toObject.height){animationToConfig.height=animation.toObject.height}
if(animation.toObject.minWidth){animationToConfig.minWidth=animation.toObject.minWidth}
if(animation.toObject.minHeight){animationToConfig.minHeight=animation.toObject.minHeight}
if(animation.toObject.maxWidth){animationToConfig.maxWidth=animation.toObject.maxWidth}
if(animation.toObject.maxHeight){animationToConfig.maxHeight=animation.toObject.maxHeight}
if(animation.toObject.paddingTop){animationToConfig.paddingTop=animation.toObject.paddingTop}
if(animation.toObject.paddingBottom){animationToConfig.paddingBottom=animation.toObject.paddingBottom}
if(animation.toObject.paddingLeft){animationToConfig.paddingLeft=animation.toObject.paddingLeft}
if(animation.toObject.paddingRight){animationToConfig.paddingRight=animation.toObject.paddingRight}
if(animation.toObject.marginTop){animationToConfig.marginTop=animation.toObject.marginTop}
if(animation.toObject.marginBottom){animationToConfig.marginBottom=animation.toObject.marginBottom}
if(animation.toObject.marginLeft){animationToConfig.marginLeft=animation.toObject.marginLeft}
if(animation.toObject.marginRight){animationToConfig.marginRight=animation.toObject.marginRight}
if(animation.toObject.positionTop){animationToConfig.top=animation.toObject.positionTop}
if(animation.toObject.positionBottom){animationToConfig.bottom=animation.toObject.positionBottom}
if(animation.toObject.positionLeft){animationToConfig.left=animation.toObject.positionLeft}
if(animation.toObject.positionRight){animationToConfig.right=animation.toObject.positionRight}
if(animation.toObject.borderColor){animationToConfig.borderColor=animation.toObject.borderColor}
if(animation.toObject.borderStyle){animationToConfig.borderStyle=animation.toObject.borderStyle}
if(animation.toObject.borderWidthTop){animationToConfig.borderTopWidth=animation.toObject.borderWidthTop}
if(animation.toObject.borderWidthBottom){animationToConfig.borderBottomWidth=animation.toObject.borderWidthBottom}
if(animation.toObject.borderWidthLeft){animationToConfig.borderLeftWidth=animation.toObject.borderWidthLeft}
if(animation.toObject.borderWidthRight){animationToConfig.borderRightWidth=animation.toObject.borderWidthRight}
if(animation.toObject.borderTopLeftRadius){animationToConfig.borderTopLeftRadius=animation.toObject.borderTopLeftRadius}
if(animation.toObject.borderTopRightRadius){animationToConfig.borderTopRightRadius=animation.toObject.borderTopRightRadius}
if(animation.toObject.borderBottomLeftRadius){animationToConfig.borderBottomLeftRadius=animation.toObject.borderBottomLeftRadius}
if(animation.toObject.borderBottomRightRadius){animationToConfig.borderBottomRightRadius=animation.toObject.borderBottomRightRadius}
if(animation.toObject.boxShadowOffsetX&&animation.toObject.boxShadowOffsetY&&animation.toObject.boxShadowBlur&&animation.toObject.boxShadowSpread&&animation.toObject.boxShadowColor){var boxShadowProperties={offsetX:animation.toObject.boxShadowOffsetX,offsetY:animation.toObject.boxShadowOffsetY,blur:animation.toObject.boxShadowBlur,spread:animation.toObject.boxShadowSpread,color:animation.toObject.boxShadowColor,};animationToConfig.boxShadow=`${boxShadowProperties.offsetX} ${boxShadowProperties.offsetY} ${boxShadowProperties.blur} ${boxShadowProperties.spread} ${boxShadowProperties.color}`}
var filterString="";if(animation.toObject.filterBlur){filterString+=`blur(${animation.toObject.filterBlur}) `}
if(animation.toObject.filterBrightness){filterString+=`brightness(${animation.toObject.filterBrightness}) `}
if(animation.toObject.filterContrast){filterString+=`contrast(${animation.toObject.filterContrast}) `}
if(animation.toObject.filterGrayscale){filterString+=`grayscale(${animation.toObject.filterGrayscale}) `}
if(animation.toObject.filterHueRotate){filterString+=`hue-rotate(${animation.toObject.filterHueRotate}) `}
if(animation.toObject.filterInvert){filterString+=`invert(${animation.toObject.filterInvert}) `}
if(animation.toObject.filterSaturate){filterString+=`saturate(${animation.toObject.filterSaturate}) `}
if(animation.toObject.filterSepia){filterString+=`sepia(${animation.toObject.filterSepia}) `}
if(filterString!=""){filterString=filterString.trim();animationToConfig.filter=filterString}
if(animation.toObject.svgFill){animationToConfig.fill=animation.toObject.svgFill}
if(animation.toObject.svgStrokeColor){animationToConfig.stroke=animation.toObject.svgStrokeColor}
if(animation.toObject.svgStrokeWidth){animationToConfig.strokeWidth=animation.toObject.svgStrokeWidth}
if(animation.toObject.customProperties&&animation.toObject.customValues){const properties=animation.toObject.customProperties.split('d110708');const values=animation.toObject.customValues.split('d110708');properties.forEach((property,index)=>{const value=values[index];if(property!==""&&value!==""){animationToConfig[property]=value}})}
if(animation.element!=""){var elementToAnimate=animation.element;if(elementToAnimate==timeline.container){elementToAnimate=nextContainer;if(elementToAnimate){if(animation.splitTextEnabled=="true"){new SplitText(elementToAnimate,elementToAnimate.querySelectorAll('*'),{type:animation.splitText,charsClass:`${animation.element}-char nb-animator-char`,wordsClass:`${animation.element}-word nb-animator-word`,linesClass:`${animation.element}-line nb-animator-line`,});if(animation.splitText.includes('char')){rightGSAPtimeline.to(elementToAnimate.getElementsByClassName(`${animation.element}-char`),animationToConfig,0)}else if(animation.splitText.includes('word')){rightGSAPtimeline.to(elementToAnimate.getElementsByClassName(`${animation.element}-word`),animationToConfig,0)}else if(animation.splitText.includes('line')){rightGSAPtimeline.to(elementToAnimate.getElementsByClassName(`${animation.element}-line`),animationToConfig,0)}else{rightGSAPtimeline.to(elementToAnimate,animationToConfig,0)}}else{rightGSAPtimeline.to(elementToAnimate,animationToConfig,0)}}}else if(document.querySelector(elementToAnimate)){if(animation.splitTextEnabled=="true"){new SplitText(document.querySelectorAll(`${elementToAnimate}, ${elementToAnimate} *`),{type:animation.splitText,charsClass:`${elementToAnimate}-char nb-animator-char`,wordsClass:`${elementToAnimate}-word nb-animator-word`,linesClass:`${elementToAnimate}-line nb-animator-line`,});if(animation.splitText.includes('char')){rightGSAPtimeline.to(document.getElementsByClassName(`${elementToAnimate}-char`),animationToConfig,0)}else if(animation.splitText.includes('word')){rightGSAPtimeline.to(document.getElementsByClassName(`${elementToAnimate}-word`),animationToConfig,0)}else if(animation.splitText.includes('line')){rightGSAPtimeline.to(document.getElementsByClassName(`${elementToAnimate}-line`),animationToConfig,0)}else{rightGSAPtimeline.to(elementToAnimate,animationToConfig,0)}}else{rightGSAPtimeline.to(elementToAnimate,animationToConfig,0)}}}
break;case "fromto":var animationFromToToConfig={duration:Number(animation.duration)};if(animation.delay){animationFromToToConfig.delay=Number(animation.delay)}
if(animation.easing){animationFromToToConfig.ease=animation.easing}
if(animation.staggerEnabled=="true"){animationFromToToConfig.stagger=animation.stagger}
if(animation.repeatEnabled=="true"){animationFromToToConfig.repeat=Number(animation.repeat)}
if(animation.yoyoEnabled=="true"){animationFromToToConfig.yoyo=!0}
if(animation.fromtotoObject.opacity){animationFromToToConfig.opacity=animation.fromtotoObject.opacity}
if(animation.fromtotoObject.autoAlpha){animationFromToToConfig.autoAlpha=animation.fromtotoObject.autoAlpha}
if(animation.fromtotoObject.transformX){animationFromToToConfig.x=animation.fromtotoObject.transformX}
if(animation.fromtotoObject.transformY){animationFromToToConfig.y=animation.fromtotoObject.transformY}
if(animation.fromtotoObject.transformScale){animationFromToToConfig.scale=animation.fromtotoObject.transformScale}
if(animation.fromtotoObject.transformRotate){animationFromToToConfig.rotation=animation.fromtotoObject.transformRotate}
if(animation.fromtotoObject.transformSkewX){animationFromToToConfig.skewX=animation.fromtotoObject.transformSkewX}
if(animation.fromtotoObject.transformSkewY){animationFromToToConfig.skewY=animation.fromtotoObject.transformSkewY}
if(animation.fromtotoObject.background){animationFromToToConfig.backgroundColor=animation.fromtotoObject.background}
if(animation.fromtotoObject.color){animationFromToToConfig.color=animation.fromtotoObject.color}
if(animation.fromtotoObject.fontFamily){animationFromToToConfig.fontFamily=animation.fromtotoObject.fontFamily}
if(animation.fromtotoObject.fontSize){animationFromToToConfig.fontSize=animation.fromtotoObject.fontSize}
if(animation.fromtotoObject.fontWeight){animationFromToToConfig.fontWeight=animation.fromtotoObject.fontWeight}
if(animation.fromtotoObject.fontStyle){animationFromToToConfig.fontStyle=animation.fromtotoObject.fontStyle}
if(animation.fromtotoObject.textAlign){animationFromToToConfig.textAlign=animation.fromtotoObject.textAlign}
if(animation.fromtotoObject.textDecoration){animationFromToToConfig.textDecoration=animation.fromtotoObject.textDecoration}
if(animation.fromtotoObject.textTransform){animationFromToToConfig.textTransform=animation.fromtotoObject.textTransform}
if(animation.fromtotoObject.lineHeight){animationFromToToConfig.lineHeight=animation.fromtotoObject.lineHeight}
if(animation.fromtotoObject.letterSpacing){animationFromToToConfig.letterSpacing=animation.fromtotoObject.letterSpacing}
if(animation.fromtotoObject.wordSpacing){animationFromToToConfig.wordSpacing=animation.fromtotoObject.wordSpacing}
if(animation.fromtotoObject.width){animationFromToToConfig.width=animation.fromtotoObject.width}
if(animation.fromtotoObject.height){animationFromToToConfig.height=animation.fromtotoObject.height}
if(animation.fromtotoObject.minWidth){animationFromToToConfig.minWidth=animation.fromtotoObject.minWidth}
if(animation.fromtotoObject.minHeight){animationFromToToConfig.minHeight=animation.fromtotoObject.minHeight}
if(animation.fromtotoObject.maxWidth){animationFromToToConfig.maxWidth=animation.fromtotoObject.maxWidth}
if(animation.fromtotoObject.maxHeight){animationFromToToConfig.maxHeight=animation.fromtotoObject.maxHeight}
if(animation.fromtotoObject.paddingTop){animationFromToToConfig.paddingTop=animation.fromtotoObject.paddingTop}
if(animation.fromtotoObject.paddingBottom){animationFromToToConfig.paddingBottom=animation.fromtotoObject.paddingBottom}
if(animation.fromtotoObject.paddingLeft){animationFromToToConfig.paddingLeft=animation.fromtotoObject.paddingLeft}
if(animation.fromtotoObject.paddingRight){animationFromToToConfig.paddingRight=animation.fromtotoObject.paddingRight}
if(animation.fromtotoObject.marginTop){animationFromToToConfig.marginTop=animation.fromtotoObject.marginTop}
if(animation.fromtotoObject.marginBottom){animationFromToToConfig.marginBottom=animation.fromtotoObject.marginBottom}
if(animation.fromtotoObject.marginLeft){animationFromToToConfig.marginLeft=animation.fromtotoObject.marginLeft}
if(animation.fromtotoObject.marginRight){animationFromToToConfig.marginRight=animation.fromtotoObject.marginRight}
if(animation.fromtotoObject.positionTop){animationFromToToConfig.top=animation.fromtotoObject.positionTop}
if(animation.fromtotoObject.positionBottom){animationFromToToConfig.bottom=animation.fromtotoObject.positionBottom}
if(animation.fromtotoObject.positionLeft){animationFromToToConfig.left=animation.fromtotoObject.positionLeft}
if(animation.fromtotoObject.positionRight){animationFromToToConfig.right=animation.fromtotoObject.positionRight}
if(animation.fromtotoObject.borderColor){animationFromToToConfig.borderColor=animation.fromtotoObject.borderColor}
if(animation.fromtotoObject.borderStyle){animationFromToToConfig.borderStyle=animation.fromtotoObject.borderStyle}
if(animation.fromtotoObject.borderWidthTop){animationFromToToConfig.borderTopWidth=animation.fromtotoObject.borderWidthTop}
if(animation.fromtotoObject.borderWidthBottom){animationFromToToConfig.borderBottomWidth=animation.fromtotoObject.borderWidthBottom}
if(animation.fromtotoObject.borderWidthLeft){animationFromToToConfig.borderLeftWidth=animation.fromtotoObject.borderWidthLeft}
if(animation.fromtotoObject.borderWidthRight){animationFromToToConfig.borderRightWidth=animation.fromtotoObject.borderWidthRight}
if(animation.fromtotoObject.borderTopLeftRadius){animationFromToToConfig.borderTopLeftRadius=animation.fromtotoObject.borderTopLeftRadius}
if(animation.fromtotoObject.borderTopRightRadius){animationFromToToConfig.borderTopRightRadius=animation.fromtotoObject.borderTopRightRadius}
if(animation.fromtotoObject.borderBottomLeftRadius){animationFromToToConfig.borderBottomLeftRadius=animation.fromtotoObject.borderBottomLeftRadius}
if(animation.fromtotoObject.borderBottomRightRadius){animationFromToToConfig.borderBottomRightRadius=animation.fromtotoObject.borderBottomRightRadius}
if(animation.fromtotoObject.boxShadowOffsetX&&animation.fromtotoObject.boxShadowOffsetY&&animation.fromtotoObject.boxShadowBlur&&animation.fromtotoObject.boxShadowSpread&&animation.fromtotoObject.boxShadowColor){var boxShadowProperties={offsetX:animation.fromtotoObject.boxShadowOffsetX,offsetY:animation.fromtotoObject.boxShadowOffsetY,blur:animation.fromtotoObject.boxShadowBlur,spread:animation.fromtotoObject.boxShadowSpread,color:animation.fromtotoObject.boxShadowColor,};animationFromToToConfig.boxShadow=`${boxShadowProperties.offsetX} ${boxShadowProperties.offsetY} ${boxShadowProperties.blur} ${boxShadowProperties.spread} ${boxShadowProperties.color}`}
var filterString="";if(animation.fromtotoObject.filterBlur){filterString+=`blur(${animation.fromtotoObject.filterBlur}) `}
if(animation.fromtotoObject.filterBrightness){filterString+=`brightness(${animation.fromtotoObject.filterBrightness}) `}
if(animation.fromtotoObject.filterContrast){filterString+=`contrast(${animation.fromtotoObject.filterContrast}) `}
if(animation.fromtotoObject.filterGrayscale){filterString+=`grayscale(${animation.fromtotoObject.filterGrayscale}) `}
if(animation.fromtotoObject.filterHueRotate){filterString+=`hue-rotate(${animation.fromtotoObject.filterHueRotate}) `}
if(animation.fromtotoObject.filterInvert){filterString+=`invert(${animation.fromtotoObject.filterInvert}) `}
if(animation.fromtotoObject.filterSaturate){filterString+=`saturate(${animation.fromtotoObject.filterSaturate}) `}
if(animation.fromtotoObject.filterSepia){filterString+=`sepia(${animation.fromtotoObject.filterSepia}) `}
if(filterString!=""){filterString=filterString.trim();animationFromToToConfig.filter=filterString}
if(animation.fromtotoObject.svgFill){animationFromToToConfig.fill=animation.fromtotoObject.svgFill}
if(animation.fromtotoObject.svgStrokeColor){animationFromToToConfig.stroke=animation.fromtotoObject.svgStrokeColor}
if(animation.fromtotoObject.svgStrokeWidth){animationFromToToConfig.strokeWidth=animation.fromtotoObject.svgStrokeWidth}
if(animation.fromtotoObject.customProperties&&animation.fromtotoObject.customValues){const properties=animation.fromtotoObject.customProperties.split('d110708');const values=animation.fromtotoObject.customValues.split('d110708');properties.forEach((property,index)=>{const value=values[index];if(property!==""&&value!==""){animationFromToToConfig[property]=value}})}
var animationFromToFromConfig={};if(animation.fromtofromObject.opacity){animationFromToFromConfig.opacity=animation.fromtofromObject.opacity}
if(animation.fromtofromObject.autoAlpha){animationFromToFromConfig.autoAlpha=animation.fromtofromObject.autoAlpha}
if(animation.fromtofromObject.transformX){animationFromToFromConfig.x=animation.fromtofromObject.transformX}
if(animation.fromtofromObject.transformY){animationFromToFromConfig.y=animation.fromtofromObject.transformY}
if(animation.fromtofromObject.transformScale){animationFromToFromConfig.scale=animation.fromtofromObject.transformScale}
if(animation.fromtofromObject.transformRotate){animationFromToFromConfig.rotation=animation.fromtofromObject.transformRotate}
if(animation.fromtofromObject.transformSkewX){animationFromToFromConfig.skewX=animation.fromtofromObject.transformSkewX}
if(animation.fromtofromObject.transformSkewY){animationFromToFromConfig.skewY=animation.fromtofromObject.transformSkewY}
if(animation.fromtofromObject.background){animationFromToFromConfig.backgroundColor=animation.fromtofromObject.background}
if(animation.fromtofromObject.color){animationFromToFromConfig.color=animation.fromtofromObject.color}
if(animation.fromtofromObject.fontFamily){animationFromToFromConfig.fontFamily=animation.fromtofromObject.fontFamily}
if(animation.fromtofromObject.fontSize){animationFromToFromConfig.fontSize=animation.fromtofromObject.fontSize}
if(animation.fromtofromObject.fontWeight){animationFromToFromConfig.fontWeight=animation.fromtofromObject.fontWeight}
if(animation.fromtofromObject.fontStyle){animationFromToFromConfig.fontStyle=animation.fromtofromObject.fontStyle}
if(animation.fromtofromObject.textAlign){animationFromToFromConfig.textAlign=animation.fromtofromObject.textAlign}
if(animation.fromtofromObject.textDecoration){animationFromToFromConfig.textDecoration=animation.fromtofromObject.textDecoration}
if(animation.fromtofromObject.textTransform){animationFromToFromConfig.textTransform=animation.fromtofromObject.textTransform}
if(animation.fromtofromObject.lineHeight){animationFromToFromConfig.lineHeight=animation.fromtofromObject.lineHeight}
if(animation.fromtofromObject.letterSpacing){animationFromToFromConfig.letterSpacing=animation.fromtofromObject.letterSpacing}
if(animation.fromtofromObject.wordSpacing){animationFromToFromConfig.wordSpacing=animation.fromtofromObject.wordSpacing}
if(animation.fromtofromObject.width){animationFromToFromConfig.width=animation.fromtofromObject.width}
if(animation.fromtofromObject.height){animationFromToFromConfig.height=animation.fromtofromObject.height}
if(animation.fromtofromObject.minWidth){animationFromToFromConfig.minWidth=animation.fromtofromObject.minWidth}
if(animation.fromtofromObject.minHeight){animationFromToFromConfig.minHeight=animation.fromtofromObject.minHeight}
if(animation.fromtofromObject.maxWidth){animationFromToFromConfig.maxWidth=animation.fromtofromObject.maxWidth}
if(animation.fromtofromObject.maxHeight){animationFromToFromConfig.maxHeight=animation.fromtofromObject.maxHeight}
if(animation.fromtofromObject.paddingTop){animationFromToFromConfig.paddingTop=animation.fromtofromObject.paddingTop}
if(animation.fromtofromObject.paddingBottom){animationFromToFromConfig.paddingBottom=animation.fromtofromObject.paddingBottom}
if(animation.fromtofromObject.paddingLeft){animationFromToFromConfig.paddingLeft=animation.fromtofromObject.paddingLeft}
if(animation.fromtofromObject.paddingRight){animationFromToFromConfig.paddingRight=animation.fromtofromObject.paddingRight}
if(animation.fromtofromObject.marginTop){animationFromToFromConfig.marginTop=animation.fromtofromObject.marginTop}
if(animation.fromtofromObject.marginBottom){animationFromToFromConfig.marginBottom=animation.fromtofromObject.marginBottom}
if(animation.fromtofromObject.marginLeft){animationFromToFromConfig.marginLeft=animation.fromtofromObject.marginLeft}
if(animation.fromtofromObject.marginRight){animationFromToFromConfig.marginRight=animation.fromtofromObject.marginRight}
if(animation.fromtofromObject.positionTop){animationFromToFromConfig.top=animation.fromtofromObject.positionTop}
if(animation.fromtofromObject.positionBottom){animationFromToFromConfig.bottom=animation.fromtofromObject.positionBottom}
if(animation.fromtofromObject.positionLeft){animationFromToFromConfig.left=animation.fromtofromObject.positionLeft}
if(animation.fromtofromObject.positionRight){animationFromToFromConfig.right=animation.fromtofromObject.positionRight}
if(animation.fromtofromObject.borderColor){animationFromToFromConfig.borderColor=animation.fromtofromObject.borderColor}
if(animation.fromtofromObject.borderStyle){animationFromToFromConfig.borderStyle=animation.fromtofromObject.borderStyle}
if(animation.fromtofromObject.borderWidthTop){animationFromToFromConfig.borderTopWidth=animation.fromtofromObject.borderWidthTop}
if(animation.fromtofromObject.borderWidthBottom){animationFromToFromConfig.borderBottomWidth=animation.fromtofromObject.borderWidthBottom}
if(animation.fromtofromObject.borderWidthLeft){animationFromToFromConfig.borderLeftWidth=animation.fromtofromObject.borderWidthLeft}
if(animation.fromtofromObject.borderWidthRight){animationFromToFromConfig.borderRightWidth=animation.fromtofromObject.borderWidthRight}
if(animation.fromtofromObject.borderTopLeftRadius){animationFromToFromConfig.borderTopLeftRadius=animation.fromtofromObject.borderTopLeftRadius}
if(animation.fromtofromObject.borderTopRightRadius){animationFromToFromConfig.borderTopRightRadius=animation.fromtofromObject.borderTopRightRadius}
if(animation.fromtofromObject.borderBottomLeftRadius){animationFromToFromConfig.borderBottomLeftRadius=animation.fromtofromObject.borderBottomLeftRadius}
if(animation.fromtofromObject.borderBottomRightRadius){animationFromToFromConfig.borderBottomRightRadius=animation.fromtofromObject.borderBottomRightRadius}
if(animation.fromtofromObject.boxShadowOffsetX&&animation.fromtofromObject.boxShadowOffsetY&&animation.fromtofromObject.boxShadowBlur&&animation.fromtofromObject.boxShadowSpread&&animation.fromtofromObject.boxShadowColor){var boxShadowProperties={offsetX:animation.fromtofromObject.boxShadowOffsetX,offsetY:animation.fromtofromObject.boxShadowOffsetY,blur:animation.fromtofromObject.boxShadowBlur,spread:animation.fromtofromObject.boxShadowSpread,color:animation.fromtofromObject.boxShadowColor,};animationFromToFromConfig.boxShadow=`${boxShadowProperties.offsetX} ${boxShadowProperties.offsetY} ${boxShadowProperties.blur} ${boxShadowProperties.spread} ${boxShadowProperties.color}`}
var filterString="";if(animation.fromtofromObject.filterBlur){filterString+=`blur(${animation.fromtofromObject.filterBlur}) `}
if(animation.fromtofromObject.filterBrightness){filterString+=`brightness(${animation.fromtofromObject.filterBrightness}) `}
if(animation.fromtofromObject.filterContrast){filterString+=`contrast(${animation.fromtofromObject.filterContrast}) `}
if(animation.fromtofromObject.filterGrayscale){filterString+=`grayscale(${animation.fromtofromObject.filterGrayscale}) `}
if(animation.fromtofromObject.filterHueRotate){filterString+=`hue-rotate(${animation.fromtofromObject.filterHueRotate}) `}
if(animation.fromtofromObject.filterInvert){filterString+=`invert(${animation.fromtofromObject.filterInvert}) `}
if(animation.fromtofromObject.filterSaturate){filterString+=`saturate(${animation.fromtofromObject.filterSaturate}) `}
if(animation.fromtofromObject.filterSepia){filterString+=`sepia(${animation.fromtofromObject.filterSepia}) `}
if(filterString!=""){filterString=filterString.trim();animationFromToFromConfig.filter=filterString}
if(animation.fromtofromObject.svgFill){animationFromToFromConfig.fill=animation.fromtofromObject.svgFill}
if(animation.fromtofromObject.svgStrokeColor){animationFromToFromConfig.stroke=animation.fromtofromObject.svgStrokeColor}
if(animation.fromtofromObject.svgStrokeWidth){animationFromToFromConfig.strokeWidth=animation.fromtofromObject.svgStrokeWidth}
if(animation.fromtofromObject.customProperties&&animation.fromtofromObject.customValues){const properties=animation.fromtofromObject.customProperties.split('d110708');const values=animation.fromtofromObject.customValues.split('d110708');properties.forEach((property,index)=>{const value=values[index];if(property!==""&&value!==""){animationFromToFromConfig[property]=value}})}
if(animation.element!=""){var elementToAnimate=animation.element;if(elementToAnimate==timeline.container){elementToAnimate=nextContainer;if(elementToAnimate){if(animation.splitTextEnabled=="true"){new SplitText(elementToAnimate,elementToAnimate.querySelectorAll('*'),{type:animation.splitText,charsClass:`${animation.element}-char nb-animator-char`,wordsClass:`${animation.element}-word nb-animator-word`,linesClass:`${animation.element}-line nb-animator-line`,});if(animation.splitText.includes('char')){rightGSAPtimeline.fromTo(elementToAnimate.getElementsByClassName(`${animation.element}-char`),animationFromToFromConfig,animationFromToToConfig,0)}else if(animation.splitText.includes('word')){rightGSAPtimeline.fromTo(elementToAnimate.getElementsByClassName(`${animation.element}-word`),animationFromToFromConfig,animationFromToToConfig,0)}else if(animation.splitText.includes('line')){rightGSAPtimeline.fromTo(elementToAnimate.getElementsByClassName(`${animation.element}-line`),animationFromToFromConfig,animationFromToToConfig,0)}else{rightGSAPtimeline.fromTo(elementToAnimate,animationFromToFromConfig,animationFromToToConfig,0)}}else{rightGSAPtimeline.fromTo(elementToAnimate,animationFromToFromConfig,animationFromToToConfig,0)}}}else if(document.querySelector(elementToAnimate)){if(animation.splitTextEnabled=="true"){new SplitText(document.querySelectorAll(`${elementToAnimate}, ${elementToAnimate} *`),{type:animation.splitText,charsClass:`${elementToAnimate}-char nb-animator-char`,wordsClass:`${elementToAnimate}-word nb-animator-word`,linesClass:`${elementToAnimate}-line nb-animator-line`,});if(animation.splitText.includes('char')){rightGSAPtimeline.fromTo(document.getElementsByClassName(`${elementToAnimate}-char`),animationFromToFromConfig,animationFromToToConfig,0)}else if(animation.splitText.includes('word')){rightGSAPtimeline.fromTo(document.getElementsByClassName(`${elementToAnimate}-word`),animationFromToFromConfig,animationFromToToConfig,0)}else if(animation.splitText.includes('line')){rightGSAPtimeline.fromTo(document.getElementsByClassName(`${elementToAnimate}-line`),animationFromToFromConfig,animationFromToToConfig,0)}else{rightGSAPtimeline.fromTo(elementToAnimate,animationFromToFromConfig,animationFromToToConfig,0)}}else{rightGSAPtimeline.fromTo(elementToAnimate,animationFromToFromConfig,animationFromToToConfig,0)}}}
break}}
if(leftGSAPtimeline!=""){timeline.leftAnimations.forEach(function(animation){if(animation.element==timeline.container){return}else{createLeftAnimation(animation)}})}
if(rightGSAPtimeline!=""){timeline.rightAnimations.forEach(function(animation){if(animation.element==timeline.container){return}else{createRightAnimation(animation)}})}
var transition={name:`transition${index}`,async leave(data){const done=this.async();timeline.leftAnimations.forEach(function(animation){if(animation.animation.element!=timeline.container){return}else{createLeftAnimation(animation,data.current.container)}});leftGSAPtimeline.restart();await delay(parseFloat(timeline.delay)*1000);done()},async enter(data){timeline.rightAnimations.forEach(function(animation){if(animation.animation.element!=timeline.container){return}else{createRightAnimation(animation,data.next.container)}});rightGSAPtimeline.restart()},};if(timeline.routefrom&&timeline.routeto){const myRoutes=[{path:timeline.routefrom,name:`routeFrom${index}`},{path:timeline.routeto,name:`routeTo${index}`},];dynamicRoutes[`myRoutes${index}`]=myRoutes;transition.from={route:[`routeFrom${index}`]};transition.to={route:[`routeTo${index}`]}}
transitionsArray.push(transition)})});const allRoutes=[];Object.keys(dynamicRoutes).forEach((key)=>{allRoutes.push(...dynamicRoutes[key])});barba.use(barbaRouter,{routes:allRoutes});barba.init({sync:!0,transitions:transitionsArray});function delay(n){n=n||0;return new Promise((done)=>{setTimeout(()=>{done()},n)})}
barba.hooks.beforeEnter(({next})=>{let triggers=ScrollTrigger.getAll();triggers.forEach((trigger)=>{trigger.kill()});const matches=next.html.match(/<body.+?class="([^""]*)"/i);document.body.setAttribute("class",(matches&&matches.at(1))??"");const nextEl=next;if(nextEl){var htmlString=nextEl.html;var tempDiv=document.createElement("div");tempDiv.innerHTML=htmlString;var links=tempDiv.getElementsByTagName("link");var styles=tempDiv.getElementsByTagName("style");function loadStylesheet(href,id,rel,type){var existingStylesheet=document.querySelector(`link[href="${href}"]`);if(!existingStylesheet){var stylesheet=document.createElement("link");stylesheet.href=href;stylesheet.id=id;stylesheet.rel=rel;stylesheet.type=type;document.head.appendChild(stylesheet)}}
function loadStyle(styleContent){var existingStyles=document.querySelectorAll("style");var exists=Array.from(existingStyles).some((style)=>style.innerHTML===styleContent);if(!exists){var styleElement=document.createElement("style");styleElement.innerHTML=styleContent;document.head.appendChild(styleElement)}}
function removeUnusedElements(existingElements,newElements,tagName){for(var k=0;k<existingElements.length;k++){var existingElement=existingElements[k];var existsInNewElements=Array.from(newElements).some((newElement)=>{if(tagName==="link"){return existingElement.href===newElement.href}else if(tagName==="style"){return existingElement.innerHTML===newElement.innerHTML}
return!1});if(!existsInNewElements){existingElement.parentNode.removeChild(existingElement)}}}
for(var i=0;i<links.length;i++){var link=links[i];if(link.href){loadStylesheet(link.href,link.id,link.rel,link.type)}}
for(var j=0;j<styles.length;j++){var style=styles[j];if(style.innerHTML){loadStyle(style.innerHTML)}}
var existingLinks=document.querySelectorAll("link");removeUnusedElements(existingLinks,links,"link");var existingStyles=document.querySelectorAll("style");removeUnusedElements(existingStyles,styles,"style")}});barba.hooks.after(()=>{if(document.querySelector(".bc-3dswap-title")){threed_swap_title()}
if(document.querySelector(".atropos-inner")){threedhover()}
if(document.querySelector(".bc-anyside-button")){anysidebutton()}
if(document.querySelector(".bc-back-to-top")){backtotop()}
if(document.querySelector(".bc-before-after-image")){beforeafter_image()}
if(document.querySelector(".bc-blended-title")){blended_title()}
if(document.querySelector(".bc-bubbles")){bubbles()}
if(document.querySelector(".bc-circular-title")){circular_title()}
if(document.querySelector(".bc-click-and-copy")){clickandcopy()}
if(document.querySelector(".bc-codepen")){bc_codepen()}
if(document.querySelector(".bc-core-burguer")){coreburguer()}
if(document.querySelector(".bc-core-slider-wrapper")){coreslider()}
if(document.querySelector(".bc-core-tabs")){coretabs()}
if(document.querySelector(".bc-counter")){bc_counter()}
if(document.querySelector(".bc-crystal-button")){crystalbutton()}
if(document.querySelector(".bc-cursor")){cursor()}
if(document.querySelector(".bc-dark-mode")){nightmode()}
if(document.querySelector(".bc-decode-hover")){decodehover()}
if(document.querySelector(".bc-decode-reveal")){decode_reveal()}
if(document.querySelector(".bc-divider")){bc_divider()}
if(document.querySelector(".bc-drawer")){bc_drawer()}
if(document.querySelector(".bc-exchange-title")){exchange_title()}
if(document.querySelector(".wrapper-bc-expander")){bcexpander()}
if(document.querySelector(".bc-expanding-menu")){expanding_menu()}
if(document.querySelector(".bc-flipbox")){flipbox()}
if(document.querySelector(".bc-fuid-gradient")){bc_fluid_gradient()}
if(document.querySelector(".bc-list-glitchys")){glitchy()}
if(document.querySelector(".bc-glowing-card")){bc_glowing_card()}
if(document.querySelector(".bc-gradiently")){bc_gradiently()}
if(document.querySelector(".bc-grained")){grained()}
if(document.querySelector(".bc-image-hotspots")){imagehotspots()}
if(document.querySelector(".bc-img-reveal")){image_reveal()}
if(document.querySelector(".bc-infinite-title")){bc_infinite_title()}
if(document.querySelector(".bc-letter-launcher")){letter_launcher()}
if(document.querySelector(".bc-lottie")){bclottie()}
if(document.querySelector(".bc-mask-button")){maskbutton()}
if(document.querySelector(".bc-media")){bc_media()}
if(document.querySelector(".bc-microbox-button")){microbox_button()}
if(document.querySelector(".bc-morphing-menu")){morphingmenu()}
if(document.querySelector(".bc-mousefill-title")){bc_mousefill_title()}
if(document.querySelector(".bc-multi-offcanvas-menu")){multioffcanvasmenu()}
if(document.querySelector(".bc-observer")){observer()}
if(document.querySelector(".bc-offcanvas-menu")){offcanvasmenu()}
if(document.querySelector(".bc-overlay-menu")){overlaymenu()}
if(document.querySelector(".bc-parallax")){parallax()}
if(document.querySelector(".bc-random-letters")){random_letters()}
if(document.querySelector(".bc-scribble-title")){scribbletitle()}
if(document.querySelector(".bc-scroll-cascading")){bc_scroll_cascading()}
if(document.querySelector(".bc-scroll-gradient")){bc_scroll_gradient()}
if(document.querySelector(".bc-scroll-reading")){scroll_reading()}
if(document.querySelector(".bc-spinner")){bc_spinner()}
if(document.querySelector(".bc-split-button")){bc_split_button()}
if(document.querySelector(".bc-stickynav-menu")){stickynavmenu()}
if(document.querySelector(".bc-stripe")){stripemegamenu()}
if(document.querySelector(".bc-svg-title")){svgtitle()}
if(document.querySelector(".bc-swap-title")){swap_hover()}
if(document.querySelector(".bc-list-tippys")){tippys()}
if(document.querySelector(".bc-twist-title")){twist_title()}
if(document.querySelector(".bc-typed")){bc_typed()}
if(document.querySelector(".bc-unfold-hover")){bc_unfold_hover()}
if(document.querySelector(".bc-unfold-reveal")){unfoldreveal()}
if(document.querySelector(".bc-video-sequence")){videosequence()}
if(document.querySelector(".bc-zoom-lens")){zoom_lens()}
if(document.querySelector(".next-arrow-icon")){next_arrow_icon()}
if(document.querySelector(".next-dropdown-mega-menu")){next_dropdown_mega_menu()}
if(document.querySelector(".next-dropdown")){next_dropdown()}
if(document.querySelector(".next-horizontal-scroll")){next_horizontal_scroll()}
if(document.querySelector(".next-lamp")){next_lamp()}
if(document.querySelector(".next-marquee-button-v2")){marquee_button_v2()}
if(document.querySelector(".next-particles")){next_particles()}
if(document.querySelector(".next-physics")){next_physics()}
if(document.querySelector(".next-ripple-button-v2")){ripple_button_v2()}
if(document.querySelector(".next-timeline")){next_timeline()}
if(document.querySelector(".next-ripple-button-v3")){ripple_button_v3()}
if(document.querySelector(".next-toc")){next_table_of_contents()}
if(document.querySelector(".next-spotlight-v2")){next_spotlight_v2()}
if(document.querySelector(".bc-reel")){marquee()}
if(document.querySelector(".bc-blade-title")){blade_title()}
if(document.querySelector(".bc-smooth-scroll-data")){smoothscroll()}
if(document.querySelector(".bc-data-scrollbar")){scrollbar()}
if(document.querySelector(".bc-sharer")){sharer()}
if(document.querySelector(".nb-circular-menu")){next_circular_menu()}
if(document.querySelector(".next-cookies")){next_cookies_front()}
if(document.querySelector(".next-progress-bar")){next_progress_bar()}
if(document.querySelector(".next-qr-code")){next_qr_code()}
if(document.querySelector(".next-dock-menu")){next_dock_menu()}
if(document.querySelector(".next-blur-reveal")){next_blur_reveal()}
if(document.querySelector(".next-blur-reading")){next_blur_reading()}
if(document.querySelector(".next-cta-nav")){next_cta_nav()}
if(document.querySelector(".next-meteors")){next_meteors()}
if(document.querySelector(".next-fluids")){next_fluids()}
if(document.querySelector(".next-tiles")){next_tiles()}
if(document.querySelector(".next-stacking-cards")){next_stacking_cards()}
if(document.querySelector(".next-designer-cursor")){next_designer_cursor()}
if(document.querySelector(".next-cursor-slide")){next_cursor_slide()}
if(document.querySelector(".next-parallax-slider")){next_parallax_slider()}
if(document.querySelector(".next-interactive-divider")){next_interactive_divider()}
includeCustomJS()});function includeCustomJS(){let customJsCode=data_pagetransitions.customjs.replace(/\\/g,"");eval(customJsCode)}}