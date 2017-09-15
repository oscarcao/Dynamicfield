<template>
    <div class="form-group">
        <p class="text-muted" v-if="fieldInfo.instruction != ''" v-text="fieldInfo.instruction"></p>


        <section class="area-of-focus area-of-focus--{{ fieldUniqueId }}">
          <div class="c-areaOfFocus__diagram" v-el:svgcode>
      			<svg version="1.1"
      				 class="c-areaOfFocus__figureGradient"
      				 viewBox="0 0 0 0"
      				 xmlns="http://www.w3.org/2000/svg"
      				 xmlns:xlink="http://www.w3.org/1999/xlink">
      				<defs>
      					<linearGradient id="figureGradient" x1="50%" y1="0%" x2="50%" y2="100%">
      						<stop offset="0%" stop-color="rgb(238,106,13)" stop-opacity="1"></stop>
      						<stop offset="100%" stop-color="rgb(245,6,27)" stop-opacity="1"></stop>
      					</linearGradient>
      				</defs>
      			</svg>
      			<div class="c-areaOfFocus__figure c-areaOfFocus__figureFront">
      				<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
      					 y="0px" xml:space="preserve"
      					 viewBox="66 -182.6 221.5 454.6">
      					<path  id="Head" class="c-areaOfFocus__bodyPart" d="M182.3-124.8h-11.2c-7.7,0-14-6.2-14-14l-2.2-28.2c0-8.6,7-15.6,15.6-15.6h12.5c8.6,0,15.6,7,15.6,15.6
      					l-2.2,28.2C196.4-131.1,190-124.8,182.3-124.8z"/>
      					<path id="Neck"  class="c-areaOfFocus__bodyPart" d="M184.5-109.8h-15.6c-1.4,0-2.6-1.2-2.6-2.6v-2.6c0-1.4,1.2-2.6,2.6-2.6h15.6c1.4,0,2.6,1.2,2.6,2.6v2.6
      					C187.1-111,186-109.8,184.5-109.8z"/>
      					<path id="Pecs"  class="c-areaOfFocus__bodyPart" d="M190.5-104.9c-4.5,2.6-23.5,2.3-27.6,0c-4.5-2.6-11-7.1-15.6-3.2s-15.6,24.7,4.2,37.7
      					c6,3.9,15.1,5.8,15.1,5.8c1.4,0.3,3-0.5,3.6-1.8c0,0,2.3-5.1,6.5-5.1s6.5,5.1,6.5,5.1c0.6,1.3,2.2,2.1,3.6,1.8c0,0,9.1-1.9,15.1-5.8
      					c19.8-13,8.7-33.8,4.2-37.7C201.6-112.1,195.1-107.5,190.5-104.9z"/>
      					<path id="RightShoulder"  class="c-areaOfFocus__bodyPart" d="M119.7-78.9h5.5c3.6,0,7.3-2.9,8.2-6.3c0,0,6-21.8-5.1-21.8c-7.2,0-15.6,5.1-20.1,17.1
      					c-2.5,6.6-2.2,11.6-2.2,11.6c0.3,3.5,2.7,4.7,5.6,2.6C111.8-75.6,115.8-78.9,119.7-78.9z"/>
      					<path id="LeftShoulder"  class="c-areaOfFocus__bodyPart" d="M233.9-78.9h-5.5c-3.6,0-7.3-2.9-8.2-6.3c0,0-6-21.8,5.1-21.8c7.2,0,15.6,5.1,20.1,17.1
      					c2.5,6.6,2.2,11.6,2.2,11.6c-0.3,3.5-2.7,4.7-5.6,2.6C241.8-75.6,237.6-78.9,233.9-78.9z"/>
      					<ellipse id="RightBicep"  transform="matrix(0.9375 0.3479 -0.3479 0.9375 -11.0949 -43.259)"
      							 class="c-areaOfFocus__bodyPart" cx="114.9" cy="-52.5"
      							 rx="10.3" ry="22.9"/>
      					<ellipse id="LeftBicep"  transform="matrix(-0.9375 0.3479 -0.3479 -0.9375 443.4167 -184.6101)"
      							 class="c-areaOfFocus__bodyPart" cx="238.3" cy="-52.5"
      							 rx="10.3" ry="22.9"/>
      					<circle id="RightElbow"  class="c-areaOfFocus__bodyPart" cx="98.7" cy="-24.9" r="4.4"/>
      					<circle id="LeftElbow"  class="c-areaOfFocus__bodyPart" cx="254.9" cy="-24.9" r="4.4"/>
      					<ellipse id="RightForearm"  transform="matrix(0.9375 0.3479 -0.3479 0.9375 7.2428 -35.7256)"
      							 class="c-areaOfFocus__bodyPart" cx="103.1" cy="2.3" rx="8.1"
      							 ry="29.6"/>
      					<ellipse id="LeftForearm"  transform="matrix(-0.9375 0.3479 -0.3479 -0.9375 485.9817 -82.5383)"
      							 class="c-areaOfFocus__bodyPart" cx="250.4" cy="2.4"
      							 rx="8.1" ry="29.6"/>
      					<circle id="RightWrist"  class="c-areaOfFocus__bodyPart" cx="99.3" cy="35.6" r="3.8"/>
      					<circle id="LeftWrist"  class="c-areaOfFocus__bodyPart" cx="254.1" cy="35.6" r="3.8"/>
      					<path id="RightHand"  class="c-areaOfFocus__bodyPart" d="M86.9,58.2l5.9-14.3c1.2-2.9,0.1-6.5-2.5-8.1l-4.2-2.6c0,0-0.1,0-0.1-0.1c-0.4-0.3-0.9-0.5-1.6-0.7
      					c-0.5-0.1-1-0.1-1.4-0.1c-2.1-0.1-4.8,0.3-7.8,1.2c-5.7,1.7-10,4.4-9.5,6.1c0.4,1.6,4.6,1.8,9.5,0.7l-7.2,12.6
      					c-1.7,2.6-0.5,5.3,2.3,6.3l9.1,2.6C82.4,62.6,85.8,61.1,86.9,58.2z"/>
      					<path id="LeftHand"  class="c-areaOfFocus__bodyPart" d="M266.5,58.2l-5.9-14.3c-1.2-2.9-0.1-6.5,2.5-8.1l4.2-2.6c0,0,0.1,0,0.1-0.1c0.4-0.3,0.9-0.5,1.6-0.7
      					c0.5-0.1,1-0.1,1.4-0.1c2.1-0.1,4.8,0.3,7.8,1.2c5.7,1.7,10,4.4,9.5,6.1c-0.4,1.6-4.6,1.8-9.5,0.7l7.2,12.6c1.7,2.6,0.5,5.3-2.3,6.3
      					l-9.1,2.6C271,62.6,267.8,61.1,266.5,58.2z"/>
      					<path id="Abs"  class="c-areaOfFocus__bodyPart" d="M189.1-58.2c-0.3,0.1-5.8,1-11.4,1c-5.6,0-11.2-0.9-11.4-1c-1-0.3-10.5-2.3-17.3-6.8
      					c-5.3-3.5-7-4.7-8.8-1.7c-2.4,4-1.9,7.4,0,11.4c6.8,16.9,10.5,35.5,10.5,54.7c0,14.7,11.7,26.5,26.3,26.5
      					c14.4,0,26.3-11.7,26.3-26.3c0-19.6,3.8-38.1,10.5-55c1.9-4,2.1-6.4,0.6-10.4c-0.7-1.8-3.4-2.3-7.8,0.7
      					C199.6-60.6,190.1-58.4,189.1-58.2z"/>
      					<path id="RightQuad"  class="c-areaOfFocus__bodyPart" d="M163.8,129.8c-4,0-6-8.3-6-8.3c-4.9-0.3-16.6-16.8-19-39.8c-2.5-23.8,4-58.5,4-58.5
      					c0.4-5.1,4-7,8-4l15.1,11.3c4.1,2.9,7.5,9.5,7.5,14.6C173.4,45,174.4,129.8,163.8,129.8z"/>
      					<path id="LeftQuad"  class="c-areaOfFocus__bodyPart " d="M195.8,121.5c4.9-0.3,16.6-16.8,19-39.8c2.5-23.8-4-58.5-4-58.5c-0.4-5.1-4-7-8-4l-15.1,11.3
      					c-4.1,2.9-7.5,9.5-7.5,14.6c0,0-1,84.8,9.6,84.8C193.8,129.8,195.8,121.5,195.8,121.5z"/>
      					<path id="RightShin"  class="c-areaOfFocus__bodyPart" d="M161.1,142.3c0-0.3,0-0.5-0.1-0.8c-0.8-6.8-4-12-7-11.7s-4.9,6.1-4.2,13v0.4
      					c-3.4,6.8-4.5,20-2.9,35.1c2.5,21.2,10,37.6,16.9,36.8s10.4-18.5,7.9-39.6C170.1,160.7,165.8,148.3,161.1,142.3z"/>
      					<path id="LeftShin"  class="c-areaOfFocus__bodyPart" d="M192.3,142.3c0-0.3,0-0.5,0.1-0.8c0.8-6.8,4-12,7-11.7s4.9,6.1,4.2,13v0.4
      					c3.4,6.8,4.5,20,2.9,35.1c-2.5,21.2-10,37.6-16.9,36.8s-10.4-18.5-7.9-39.6C183.3,160.7,187.6,148.3,192.3,142.3z"/>
      					<path id="RightFoot"  class="c-areaOfFocus__bodyPart" d="M170.7,268.4c0,2.9-2.1,4.3-4.8,3.1l-10.7-4.7c-2.6-1.2-4.4-4.4-3.9-7.3l5.7-34.7
      					c0.5-2.9,3.2-5.1,6.1-5.1h2.3c2.9,0,5.2,2.3,5.2,5.2L170.7,268.4L170.7,268.4z"/>
      					<path id="LeftFoot"  class="c-areaOfFocus__bodyPart" d="M187.6,271.5l10.7-4.7c2.6-1.2,4.4-4.4,3.9-7.3l-5.7-34.7c-0.5-2.9-3.2-5.1-6.1-5.1h-2.3
      					c-2.9,0-5.2,2.3-5.2,5.2v43.4C182.7,271.3,184.8,272.7,187.6,271.5z"/>
      				</svg>
      			</div>
      			<div class="c-areaOfFocus__figure c-areaOfFocus__figureBack">
      				<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
      					 y="0px" xml:space="preserve"
      					 viewBox="67.7 -182.5 221.5 454.6">
      					<title>TAFigure_MasterFront Copy</title>
      					<desc>Created with Sketch.</desc>
      					<path id="Head"  class="c-areaOfFocus__bodyPart" d="M184.8-182.5h-12.5c-8.6,0-15.6,7-15.6,15.6l2.2,28.3c0,7.6,6.1,13.8,13.7,13.9
      	c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1c7.4-0.4,13.3-6.5,13.3-13.9l2.2-28.3C200.4-175.4,193.4-182.5,184.8-182.5
      	L184.8-182.5z"/>
      					<path id="LeftTrap"  class="c-areaOfFocus__bodyPart" d="M167.7-117.2c-12.2-0.4-19.8,4.7-19.8,16.2s11.9,31,26.2,31.4c0,0,1.7-15.9,1.7-25.4
      	C175.9-116.7,170.4-117.1,167.7-117.2L167.7-117.2z"/>
      					<path id="RightTrap"  class="c-areaOfFocus__bodyPart" d="M189.3-117.2c12.2-0.4,19.8,4.7,19.8,16.2s-11.9,31-26.2,31.4c0,0-1.7-15.9-1.7-25.4
      	C181.1-116.7,186.7-117.1,189.3-117.2L189.3-117.2z"/>
      					<path id="LeftShoulder"  class="c-areaOfFocus__bodyPart" d="M121.4-78.8h5.5c3.6,0,7.3-2.9,8.2-6.3c0,0,6-21.8-5.1-21.8c-7.2,0-15.6,5.1-20.1,17.1
      	c-2.5,6.6-2.2,11.6-2.2,11.6c0.3,3.5,2.7,4.7,5.6,2.6C113.5-75.5,117.6-78.8,121.4-78.8z"/>
      					<path id="RightShoulder"  class="c-areaOfFocus__bodyPart" d="M235.6-78.8h-5.5c-3.6,0-7.3-2.9-8.2-6.3c0,0-6-21.8,5.1-21.8c7.2,0,15.6,5.1,20.1,17.1
      	c2.5,6.6,2.2,11.6,2.2,11.6c-0.3,3.5-2.7,4.7-5.6,2.6C243.5-75.5,239.4-78.8,235.6-78.8z"/>
      					<ellipse id="LeftTricep"   transform="matrix(-0.3479 0.9375 -0.9375 -0.3479 108.0982 -179.951)"
      							 class="c-areaOfFocus__bodyPart"
      							 cx="116.6" cy="-52.4" rx="22.9" ry="10.3"/>
      					<ellipse id="RightTricep"  transform="matrix(-0.3479 -0.9375 0.9375 -0.3479 372.6888 154.4846)"
      							 class="c-areaOfFocus__bodyPart"
      							 cx="240.1" cy="-52.4" rx="22.9" ry="10.3"/>
      					<circle id="LeftElbow"  class="c-areaOfFocus__bodyPart" cx="100.4" cy="-24.8" r="4.4"/>
      					<circle id="RightElbow"  class="c-areaOfFocus__bodyPart" cx="256.6" cy="-24.8" r="4.4"/>
      					<ellipse id="LeftForearm"  transform="matrix(-0.3479 0.9375 -0.9375 -0.3479 143.5949 -95.0889)"
      							 class="c-areaOfFocus__bodyPart"
      							 cx="104.9" cy="2.4" rx="29.6" ry="8.1"/>
      					<ellipse id="RightForearm"  transform="matrix(-0.3479 -0.9375 0.9375 -0.3479 337.6069 239.657)"
      							 class="c-areaOfFocus__bodyPart"
      							 cx="252.1" cy="2.4" rx="29.6" ry="8.1"/>
      					<circle id="LeftWrist"  class="c-areaOfFocus__bodyPart" cx="101.1" cy="35.7" r="3.8"/>
      					<circle id="RightWrist"  class="c-areaOfFocus__bodyPart" cx="255.9" cy="35.7" r="3.8"/>
      					<path id="LeftHand"  class="c-areaOfFocus__bodyPart" d="M88.7,58.3l5.9-14.3c1.2-2.9,0.1-6.5-2.5-8.1l-4.2-2.6c0,0-0.1,0-0.1-0.1c-0.4-0.3-0.9-0.5-1.6-0.7
      	c-0.5-0.1-1-0.1-1.4-0.1c-2.1-0.1-4.8,0.3-7.8,1.2c-5.7,1.7-10,4.4-9.5,6.1c0.4,1.6,4.6,1.8,9.5,0.7l-7.2,12.6
      	c-1.7,2.6-0.5,5.3,2.3,6.3l9.1,2.6C84.2,62.7,87.5,61.2,88.7,58.3z"/>
      					<path id="RightHand"  class="c-areaOfFocus__bodyPart" d="M268.3,58.3l-5.9-14.3c-1.2-2.9-0.1-6.5,2.5-8.1l4.2-2.6c0,0,0.1,0,0.1-0.1c0.4-0.3,0.9-0.5,1.6-0.7
      	c0.5-0.1,1-0.1,1.4-0.1c2.1-0.1,4.8,0.3,7.8,1.2c5.7,1.7,10,4.4,9.5,6.1c-0.4,1.6-4.6,1.8-9.5,0.7l7.2,12.6c1.7,2.6,0.5,5.3-2.3,6.3
      	l-9.1,2.6C272.8,62.7,269.5,61.2,268.3,58.3z"/>
      					<path id="Back"  class="c-areaOfFocus__bodyPart" d="M212.4-82.6c-2.9,0-5.2,2.3-5.2,5.2c0,7.3-16.9,14.9-28.7,14.9c-11.8,0-28.7-7.6-28.7-14.9
      	c0-2.9-2.3-5.2-5.2-5.2c-2.3,0-4.3,1.6-4.9,3.6c0,0-1,3.4-1,7.7c0,4.8,1.2,9.4,3.1,13.4c6.8,16.9,10.5,31.9,10.5,51.3
      	c0,0.1-0.1,19.5,26.2,22c26.4-2.3,26.2-21.9,26.2-22c0-19.4,3.8-34.4,10.5-51.3c1.9-4,3.1-8.6,3.1-13.4c0-4.2-0.9-7.7-1-7.7
      	C216.7-81,214.8-82.6,212.4-82.6z"/>
      					<path id="LeftLat"  class="c-areaOfFocus__bodyPart" d="M144.6-83c-2.3,0-4.3,1.6-4.9,3.6c0,0-1,3.4-1,7.6c0,4.8,1.2,9.3,3.1,13.3c6.7,16.8,10.5,31.7,10.5,51
      	c0,0-2.2-27.4,14.4-33.9c5-1.9,7.1-15.3-7.9-21.9c-9.6-4.1-8.9-14.6-8.9-14.6C149.8-80.6,147.5-83,144.6-83z"/>
      					<path id="RightLat"  class="c-areaOfFocus__bodyPart" d="M207.3-77.8c0-2.8,2.3-5.2,5.2-5.2c2.3,0,4.3,1.6,4.9,3.6c0,0,1,3.4,1,7.6c0,4.8-1.2,9.3-3.1,13.3
      	c-6.7,16.8-10.5,31.7-10.5,51c0,0,2.2-27.4-14.4-33.9c-5-1.9-7.1-15.3,7.9-21.9C207.9-67.3,207.3-77.8,207.3-77.8z"/>
      					<path id="LeftLowerBack"  class="c-areaOfFocus__bodyPart" d="M160.7-13.4c0,11.7,6,21.4,14,23.8c0.1-2.5,0.1-5,0.1-7.6c0-14.6-1-28.1-3-38.7
      	C165.4-32.5,160.7-23.7,160.7-13.4z"/>
      					<path id="RightLowerBack"  class="c-areaOfFocus__bodyPart" d="M195.8-13.4c0,11.7-6,21.4-14,23.8c-0.1-2.5-0.1-5-0.1-7.6c0-14.6,1-28.1,3-38.7
      	C191.1-32.5,195.8-23.7,195.8-13.4z"/>
      					<path id="Glutes"  class="c-areaOfFocus__bodyPart" d="M193.2,19.3c-9,4-19.2,4-29.5,0c-5-2-11.9-8.2-16.7-4.7c-4.8,3.5-16.7,22,4.6,33.6
      	c6.4,3.5,16.2,5.2,16.2,5.2c1.4,0.3,3.3-0.5,3.9-1.6c0,0,2.5-4.6,6.9-4.6c4.4,0,6.9,4.6,6.9,4.6c0.7,1.2,2.3,1.8,3.9,1.6
      	c0,0,9.8-1.8,16.2-5.2c21-11.6,9.1-30.1,4.3-33.6S198.2,17.1,193.2,19.3z"/>
      					<path id="LeftHamstring"  class="c-areaOfFocus__bodyPart" d="M166.5,129.6c-4,0-6-8.3-6-8.3c-4.9-0.3-16.6-16.8-19-39.8c-2.5-23.8,1.4-28.3,2.9-28.4
      	c13.6-1.2,20,11.5,20,11.5c8,0,10.5,5.4,10.5,10.5C174.9,75.1,177.1,129.6,166.5,129.6z"/>
      					<path id="RightHamstring"  class="c-areaOfFocus__bodyPart" d="M190.5,129.6c4,0,6-8.3,6-8.3c4.9-0.3,16.6-16.8,19-39.8c2.5-23.8-1.4-28.3-2.9-28.4
      	c-13.6-1.2-20,11.5-20,11.5c-8,0-10.5,5.4-10.5,10.5C182.1,75.1,179.9,129.6,190.5,129.6z"/>
      					<path id="LeftCalf"  class="c-areaOfFocus__bodyPart" d="M173.9,175.4c-1.7-14.7-6-27.2-10.7-33.2c0-0.3,0-0.5-0.1-0.8c-0.8-6.8-4-12-7-11.7c-3,0.3-5,6.1-4.2,13v0.4
      	c-3.4,6.8-4.6,20.1-2.9,35.2c2.5,21.2,10,37.7,16.9,36.9C172.9,214.4,176.4,196.7,173.9,175.4z"/>
      					<path id="RightCalf"  class="c-areaOfFocus__bodyPart" d="M183.6,175.4c1.7-14.7,6-27.2,10.7-33.2c0-0.3,0-0.5,0.1-0.8c0.8-6.8,4-12,7-11.7c3,0.3,5,6.1,4.2,13v0.4
      	c3.4,6.8,4.6,20.1,2.9,35.2c-2.5,21.2-10,37.7-16.9,36.9C184.6,214.4,181.1,196.7,183.6,175.4z"/>
      					<path id="LeftFoot"  class="c-areaOfFocus__bodyPart" d="M172.2,268.6c0,2.9-2.1,4.3-4.8,3.1l-10.7-4.7c-2.6-1.2-4.4-4.4-3.9-7.3l5.7-34.8c0.5-2.9,3.3-5.1,6.1-5.1h2.3
      	c2.9,0,5.2,2.3,5.2,5.2V268.6z"/>
      					<path id="RightFoot"  class="c-areaOfFocus__bodyPart" d="M185.3,268.6c0,2.9,2.1,4.3,4.8,3.1l10.7-4.7c2.6-1.2,4.4-4.4,3.9-7.3L199,225c-0.5-2.9-3.3-5.1-6.1-5.1h-2.3
      	c-2.9,0-5.2,2.3-5.2,5.2V268.6z"/>
      				</svg>
      			</div>
              <style>
                  .c-areaOfFocus__gradientFill {
                      fill: url(#figureGradient);
                      stroke: none !important;
                  }
              </style>
      		</div>
        </section>


        <textarea id="cdf-{{ fieldUniqueId }}" class="form-control form-control--hidden" name="cdf[{{ fieldUniqueId }}][value]" v-model="fieldData.value" :required="isRequired" rows="{{ rowsAmount }}">
        </textarea>

        <input name="cdf[{{ fieldUniqueId }}][type]" v-model="fieldData.type" value="areaOfFocus" type="hidden">
        <input name="cdf[{{ fieldUniqueId }}][field_id]" v-model="fieldInfo.unique_id" type="hidden">
        <input name="cdf[{{ fieldUniqueId }}][parent]" v-model="parentId" type="hidden">
        <input name="cdf[{{ fieldUniqueId }}][parent_layout]" v-model="parentLayout" type="hidden">
        <!--<input name="cdf[{{ fieldUniqueId }}][parent_layout]" v-model="fieldInfo.parent_layout" type="hidden">-->
    </div>
</template>

<script>
    export default {
        props : ['fieldInfo','parentLayout','parent'],
        created : function(){
            var that = this;
            if(this.fieldInfo.field_translation == undefined || this.fieldInfo.field_translation == null){
                var UniqueId = DynamicFields.GetUniqueId('field_');
                that.fieldInfo.field_translation = {
                    field_id    : that.fieldInfo.unique_id,
                    unique_id   : UniqueId,
                    value       : ''
                };
            }
        },
        ready : function(){

          let that = this;
            if(this.fieldInfo.field_translation != undefined){
                if(this.fieldInfo.field_translation.value != '') {
                    this.fieldData.value = this.fieldInfo.field_translation.value;
                    this.$els.svgcode.innerHTML = this.fieldInfo.field_translation.value;
                }else{
                    this.updateFieldValue();
                }
            }


            $('.area-of-focus--' +  this.fieldUniqueId).find('.c-areaOfFocus__bodyPart').on('click',function(){
                if(this.classList.contains('c-areaOfFocus__gradientStroke')){
                    this.classList.remove('c-areaOfFocus__gradientStroke');
                    this.classList.add('c-areaOfFocus__gradientFill');
                    //this.fill = "url(#figureGradient)";
                    that.updateFieldValue();
                    return;
                }

                if(this.classList.contains('c-areaOfFocus__gradientFill')){
                    this.classList.remove('c-areaOfFocus__gradientFill');
                    //this.fill = "";
                    that.updateFieldValue();
                    return;
                }

                if(!this.classList.contains('c-areaOfFocus__gradientFill') && !this.classList.contains('c-areaOfFocus__gradientStroke')){
                    this.classList.add('c-areaOfFocus__gradientStroke');
                    //this.fill = "";
                    that.updateFieldValue();
                    return;
                }
            });



        },
        data : function() {
            return {
                fieldData : {
                    value : '',
                    type  : 'areaOfFocus'
                }
            };
        },
        computed : {
            svgValue : function(){
              return this.$els.svgcode.innerHTML;
            },

            isRequired : function(){
                if(this.fieldInfo.required == 'true'){
                    return true;
                }
                return false;
            },

            parentId : function(){
                if(this.parent != undefined){
                    return this.parent;
                }
                return 0;
            },

            /*
             * so we also need a unique id for the field,
             * wether new or current
             */
            fieldUniqueId : function(){
                if(this.fieldInfo.field_translation){
                    //return this.fieldInfo.field_translation.field_id;
                    if(this.fieldInfo.field_translation.unique_id != undefined) {
                        return this.fieldInfo.field_translation.unique_id;
                    }
                }

                return DynamicFields.GetUniqueId('field_');
            }
        },

        methods : {

          updateFieldValue : function(){
            this.fieldData.value = this.$els.svgcode.innerHTML;
          }

        }

    };
</script>

<style>

.area-of-focus {
  float: left;
  width: 100%;
  max-width: 700px;
}

.c-areaOfFocus__diagram {
  overflow: hidden;
}

.c-areaOfFocus__figureGradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height : 0;
  width : 0;
}

.c-areaOfFocus__figure {
  width: 50%;
  float: left;
  padding-left: 6px;
  padding-left: 0.375rem;
  padding-right: 6px;
  padding-right: 0.375rem;
}

@media screen and (min-width: 77rem) {
  .c-areaOfFocus__figure {
    padding-left: 24px;
    padding-left: 1.5rem;
    padding-right: 24px;
    padding-right: 1.5rem;
  }
  .c-areaOfFocus__figure:after {
    content: '';
    display: block;
    width: 60%;
    height: 20px;
    margin-left: auto;
    margin-right: auto;
    background-image: radial-gradient(ellipse closest-side at center, rgba(50, 50, 50, 0.2) 40%, transparent);
    margin-top: 12px;
    margin-top: 0.75rem;
  }
}

.c-areaOfFocus__bodyPart {
  fill: #929ba9;
  cursor : pointer;
}

.c-areaOfFocus__gradientStroke {
  fill: none !important;
  stroke: #fb4904 !important;
  stroke-width: 2px !important;
}

.c-areaOfFocus__gradientFill {
  fill: url(#figureGradient) !important;
  stroke: none !important;
}

.c-areaOfFocus__bodyPart:hover,
.c-areaOfFocus__gradientFill:hover,
.c-areaOfFocus__gradientStroke:hover {
  /*fill: #ee3224;*/
  fill: #000000 !important;
  stroke: #fb4904 !important;
}


</style>
