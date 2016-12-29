var UIManager = require('react-native/lib/UIManager');

export default function simpleFetch(initialProps: Props, rootTag: any) {
  UIManager.createView(2, "RCTText", rootTag, {backgroundColor: -65536});
  UIManager.createView(3, "RCTRawText", rootTag, {"text": "fetch...."});
  UIManager.setChildren(2, [3]);
  UIManager.setChildren(1, [2]);

  fetch("http://www.baidu.com").then((response)=>{
    response.text().then(text=>{
      UIManager.createView(4, "RCTRawText", rootTag, {"text": text});
      setTimeout(()=>{
        UIManager.setChildren(2, [4]);
      },5000);

    })
  }).catch((e)=>{
    console.info(e);
  });


}
