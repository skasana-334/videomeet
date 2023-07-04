import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { ZegoSuperBoardManager } from "zego-superboard-web";
const Room = () => {
    const {roomID}=useParams();

    // now everything is as per documentation of api
    let myMeeting = async (element) => {
        // generate Kit Token
         const appID =1433886604 ;
         const serverSecret = "fa13250f39dbed513c127ec52e98001b";
         const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
             serverSecret,
              roomID,  
              Date.now().toString(),
              "sagar");
   
   
        // Create instance object from Kit Token.
         const zp = ZegoUIKitPrebuilt.create(kitToken);
         // start the call
         zp.addPlugins({ZegoSuperBoardManager});
         zp.joinRoom({
           container: element,
            /****to disable video */
    // turnOnCameraWhenJoining: false,
    // showMyCameraToggleButton: false,
    // showAudioVideoSettingsButton: false,
    // showScreenSharingButton: false; 

    /**to disable screen sharing */
//  showScreenSharingButton: false,
videoResolutionList: [
    ZegoUIKitPrebuilt.VideoResolution_360P,
    ZegoUIKitPrebuilt.VideoResolution_180P,
    ZegoUIKitPrebuilt.VideoResolution_480P,
    ZegoUIKitPrebuilt.VideoResolution_720P,
  ],
videoResolutionDefault: ZegoUIKitPrebuilt.VideoResolution_360P,
           sharedLinks: [
             {
               name: 'Personal link',
               url:
                window.location.protocol + '//' + 
                window.location.host +
                 '?roomID=' +
                 roomID,
             },
           ],
           scenario: {
             mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
           },
         });
   
   
     };
  return (
    <div
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  )
}

export default Room
