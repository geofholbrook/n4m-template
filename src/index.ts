import maxApi from "max-api";

maxApi.outlet({ POST_LEVELS: maxApi.POST_LEVELS });

maxApi.addHandler("respond", () => {
  setInterval(() => maxApi.outlet("this works"), 1000);
});
