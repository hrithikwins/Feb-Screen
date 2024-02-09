import React, { useEffect, useRef, useState } from "react";
let subdomain = "graphity";

// props define

const AvaturnIframe = ({ userName, setRpmFrame, setReadyPlayerUrl }) => {
  const frame = useRef(null);
  const [value, setValue] = useState("");
  //   const [avatarFile, setAvatarFile] = useState(null);

  const saveGlbAvatar = async (glbURL) => {
    try {
      //   const response = await axiosInstance.post(
      //     '/api/v1/user/updateInfo',
      //     {
      //       glbAvatar: glbURL
      //     },
      //     {
      //       withCredentials: true
      //     }
      //   )
      //   console.log(response)
      //   showSuccess('Virtual avatar created!')
    } catch (err) {
      console.log(err);
      //   showError('Some error occurred')
    }
  };



  useEffect(() => {
    if (frame.current === null || frame.current === undefined) return;
    frame.current?.setAttribute("src", `https://demo.avaturn.dev/create/proceed`);
    // frame.current.setAttribute("src", `https://${subdomain}.readyplayer.me/avatar?frameApi&darkTheme`);

    function subscribe(event) {
      /* Here we process the events from the iframe */

      let json;
      try {
        json = JSON.parse(event.data);
      } catch (error) {
        console.log("Error parsing the event data.");
        return;
      }

      if (json.source !== "avaturn") {
        return;
      }

      // Get avatar GLB URL
      if (json.eventName === "v2.avatar.exported") {
        // alert(
        //   "Received an export message from avaturn. GLB link should appear."
        // );
        console.log(json);
        // setValue(json.data.url);
        // console.log(json.data.url);
        //    saveGlbAvatar(json.data.url);
        setReadyPlayerUrl(json.data.url);
        setRpmFrame(false);

        //   let glb_el = document.getElementById("glb");
        //   glb_el.href = json.data.url;
        //   glb_el.download = "avaturn_demo_avatar.glb";
        //   glb_el.hidden = false;
      }
    }
    // function subscribe(event) {
    //   const json = parse(event);

    //   if (json?.source !== "readyplayerme") {
    //     return;
    //   }

    //   // Susbribe to all events sent from Ready Player Me once frame is ready
    //   if (json.eventName === "v1.frame.ready") {
    //     frame.current?.contentWindow?.postMessage(
    //       JSON.stringify({
    //         target: "readyplayerme",
    //         type: "subscribe",
    //         eventName: "v1.**",
    //       }),
    //       "*"
    //     );
    //     console.log("Frame is ready");
    //   }

    //   // Get avatar GLB URL
    //   if (json.eventName === "v1.avatar.exported") {
    //     setValue(json.data.url);
    //     console.log(json.data.url);
    //     saveGlbAvatar(json.data.url);
    //     // onOpen();
    //   }

    //   // Get user id
    //   if (json.eventName === "v1.user.set") {
    //     console.log(`User with id ${json.data.id} set: ${JSON.stringify(json)}`);
    //   }
    // }

    function parse(event) {
      try {
        return JSON.parse(event.data);
      } catch (error) {
        return null;
      }
    }

    window.addEventListener("message", subscribe);
    document.addEventListener("message", subscribe);

    return () => {
      window.removeEventListener("message", subscribe);
      document.removeEventListener("message", subscribe);
    };
  }, []);

  useEffect(() => {
    if (value == null || value === "") return;
    updateValues();
  }, [value]);

  async function updateValues() {
    // await localStorage.setItem("avatarUrl", value);
    setReadyPlayerUrl(value);
    // setAvatar(value);
    // await localStorage.setItem("metaverseLink", "https://icc.streetverse.world/8iaQk64/surprised-informal-gala?name=" + "ICCPlayer" + "&avatarUrl=" + value.split("/")[3].split(".")[0]);
    // axios.get(value)
    setRpmFrame(false);
  }
  return (
    <div>
      <button onClick={() => setRpmFrame(false)} className="fixed bottom-2 left-4 z-40 cursor-pointer rounded-[10px] bg-[#e34030] px-8 py-4 text-white">
        Cancel
      </button>
      <div className={value == "" ? "fixed top-[2%] left-[2%] z-40 h-[90%] w-[96%] rounded-2xl shadow-xl  " : ""}>
        <iframe width="100%" height="100%" ref={frame} id="frame" className="frame" allow="camera *; microphone *; clipboard-write"></iframe>
      </div>
    </div>
  );
};

export default AvaturnIframe;
