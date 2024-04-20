import { Affix, Box, Button, Transition, rem } from "@mantine/core"
import { useWindowScroll } from "@mantine/hooks";
import { IconArrowUp } from "@tabler/icons-react"
import React from "react"

const Welcome = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div style={{lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <div>
        <p>
          อัตลักษณ์ พล็อตตรวจสอบอัลบัมฮอตดอกฮันนีมูน น็อกภารตะปาร์ตี้
          มุมมองช็อปเปอร์ฟอยล์ ตรวจสอบ คาร์บู๊ดิสเครดิต
          บึ้มซากุระโปสเตอร์ซื่อบื้อ บอมบ์ลีกดีไซน์เนอร์อิเลียด พุทธภูมิวิวเบบี้
          ไดเอ็ตซาฟารีเฮีย ศึกษาศาสตร์คีตราชันโฟล์ค รันเวย์
          บลอนด์โอเพ่นธรรมาภิบาล ฮาร์ดพาเหรดมิวสิคมยุราภิรมย์
          เจลอวอร์ดไฮเวย์โปรโมท เนอะสเปคกัมมันตะอุด้งทัวร์
        </p>
        <Box p={"10px"} bg="blue.0" fw="100">
          แชมพู สะกอมเอาท์ดอร์เที่ยงวันเพนกวิน เจ็ตทรู
          เทคเวเฟอร์หน่อมแน้มสมาพันธ์ฮาลาล
          เห็นด้วยโบว์ลิ่งเทคโนแครตภควัมปติไฟแนนซ์ โดนัทแบล็กลอจิสติกส์รีดไถบิ๊ก
          โพสต์ ปฏิสัมพันธ์นอร์ท สเตอริโอคอลัมนิสต์พุทโธแคมป์ฮิ จังโก้
          มอลล์โอ้ยคอนแท็คเวิลด์ โปรโมทแดนซ์ ซะแจ๊กเก็ต ฟลอร์ต่อยอด
          โปรเจ็กต์วีนเวิลด์เด้อ
        </Box>
      </div>
      <div>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<IconArrowUp style={{ width: rem(16), height: rem(16) }} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
      </div>
    </div>
  )
}

export default Welcome
