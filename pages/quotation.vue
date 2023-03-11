<template>
  <v-card class="v-card-main" variant="outlined">
    <v-container>
      <v-row no-gutters class="v-row-text">
        <v-col cols="auto">
          <NuxtLink to="/" class="flex items-center">
            <img
              src="https://www.adt.or.th/image/ADT1%20-%201108%20-%200263.jpg"
              class="mr-3 h-12 sm:h-15"
              alt="Flowbite Logo"
            />
          </NuxtLink>
        </v-col>
        <v-col cols="7">
          <v-sheet class="pa-2 ma-2" style="text-align: center">
            บริษัท ศรีดาราทัวร์ จำกัด (สำนักงานใหญ่)
            <td></td>
            123 ถนน ชยางกูร หมู่ 19 ตำบล บุ่ง อำเภอเมืองอำนาจเจริญ
            จังหวัดอำนาจเจริญ 37000
            <td></td>
            เลขประจำตัวผู้เสียภาษี0375552000037 โทร.082-3656514
            www.facebook.com/sridaratourfanpage
            <td></td>
            ********************************************************
          </v-sheet>
        </v-col>

        <v-col cols="auto">
          <v-sheet class="pa-2 ma-2" style="text-align: center">
            ใบเสนอราคา/ยืนยันการสั่งซื้อ
            <td></td>
            Quatation
          </v-sheet>
          <v-sheet class="pa-2 ma-2">
            <p>เลขที่</p>
            <p>วันที่</p>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row class="v-row-text">
        <v-col cols="7">
          <v-sheet class="pa-2 ma-2"
            ><a> ชื่อลูกค้า: </a>
            <a> ........................................ </a></v-sheet
          >
          <v-sheet class="pa-2 ma-2"
            ><a> ID TEX: </a>
            <a> ........................................ </a></v-sheet
          >
          <v-sheet class="pa-2 ma-2"
            ><a> ชื่อผู้ติดต่อ: </a>
            <a> ........................................ </a></v-sheet
          >
          <v-sheet class="pa-2 ma-2"
            ><a> ที่อยู่: </a>
            <a> ........................................ </a></v-sheet
          >
        </v-col>
        <v-col cols="5">
          <v-sheet class="pa-2 ma-2">
            <a> รหัสลูกค้า: </a>
            <a> ........................................ </a>
          </v-sheet>
          <v-sheet class="pa-2 ma-2">
            <a> ผู้เสนอขาย: </a>
            <a> ........................................ </a>
          </v-sheet>
          <v-sheet class="pa-2 ma-2">
            <a> ฝ่าย: </a> <a> ........................................ </a>
          </v-sheet>
          <v-sheet class="pa-2 ma-2">
            <a> ยืนยันราคาภายใน: </a>
            <a> ........................................ </a>
          </v-sheet>
          <v-sheet class="pa-2 ma-2">
            <a> วันที่ส่งของ: </a>
            <a> ........................................ </a>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row class="v-row-text">
        <v-col cols="6">
          <v-sheet class="pa-2 ma-2">
            <a> โทร: </a> <a> ........................................ </a>
          </v-sheet>
        </v-col>
        <v-col cols="6">
          <v-sheet class="pa-2 ma-2">
            <a> Email: </a> <a> ........................................ </a>
          </v-sheet>
        </v-col>
      </v-row>

      <v-table class="v-text-table" fixed-header height="300px">
        <thead>
          <tr>
            <th class="text-left">ลำดับ</th>
            <th class="text-left">รหัสสินค้า</th>
            <th class="text-left">รายการสินค้า</th>
            <th class="text-left">จำนวน</th>
            <th class="text-left">ราคาต่อหน่วย</th>
            <th class="text-left">ส่วนลด</th>
            <th class="text-left">ภาษี</th>
            <th class="text-left">จำนวนเงิน</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in customers" :key="item.name">
            <td>{{ item.no }}</td>
            <td>{{ item.product_code }}</td>
            <td>{{ item.product_name }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.unit_price }}</td>
            <td>{{ item.discount }}</td>
            <td>{{ item.tax }}</td>
            <td>{{ item.price }}</td>
          </tr>
        </tbody>
      </v-table>
      <v-card variant="none">
        <v-card-title>หมายเหตุ:</v-card-title>
        <v-card-item>
          <v-row no-gutters>
            <v-col cols="9">
              <sheet class="pa-2 ma-2" style="font-size: 18px">
                <p>กำหนดยืนราคา ...................... วัน</p>
                <p>
                  จึงเรียนมาเพื่อโปรดพิจารณาและหวังเป็นอย่างยิ่งว่าจะได้รับการพิจารณาสั่งซื้อจากท่าน
                </p>
                <p>ขอขอบพระคุณมา ณ ที่นี้ ดังรายละเอียดธนาคารดังต่อไปนี้ :</p>
                <p>
                  1.กรุณาชำระเงิน ค่ามัดจำเบื้องต้นไม่ต่ำกว่า 40% ของราคาที่เสนอ
                  โดยชำระเงินก่อนการติดตั้งอย่างน้อย 7 วัน
                </p>
                <p>
                  2.หลังติดตั้งและใช้งานได้เรียบร้อยแล้วให้ชำระเงินส่วนที่เหลือ
                </p>
              </sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet class="pa-2 ma-2" style="font-size: 18px">
                <p>มัดจำ ............................................</p>
                <p>รวมเงิน ...........................................</p>
                <p>ส่วนลดสินค้า .......................................</p>
                <p>มูลค่าสินค้า ........................................</p>
                <p>ภาษีมูลค่าเพิ่ม 7 % ..................................</p>
                <p>จำนวนเงินทั้งสิ้น .....................................</p>
              </v-sheet>
            </v-col>
          </v-row>
        </v-card-item>
      </v-card>

      <v-card variant="none">
        <v-row style="text-align: center">
          <v-col class="pa-10 ma-2"> </v-col>
          <v-col class="pa-10 ma-2"> </v-col>
          <v-col class="pa-10 ma-2"> </v-col>
          <v-col class="pa-10 ma-2"
            ><p>ข้าพเจ้าเห็นชอบตามรายการที่เสนอและ</p>
            <p>ขอสั่งซื้อตามรายละเอียดนี้ทุกประการ</p>
          </v-col>
        </v-row>
        <v-row style="text-align: center">
          <v-col> <v-sheet class="pa-0.5 ma-2"> ผู้เสนอราคา </v-sheet> </v-col>
          <v-col> <v-sheet class="pa-0.5 ma-2"> ผู้รับเงิน </v-sheet> </v-col>
          <v-col> <v-sheet class="pa-0.5 ma-2"> ผู้ตรวจสอบ </v-sheet> </v-col>
          <v-col>
            <v-sheet class="pa-0.5 ma-2"> ผู้อนุมัติสั่งซื้อ </v-sheet></v-col
          >
        </v-row>
        <v-row>
          <v-col> <v-sheet> วันที่ </v-sheet> </v-col>
          <v-col> <v-sheet> วันที่ </v-sheet> </v-col>
          <v-col> <v-sheet> วันที่ </v-sheet> </v-col>
          <v-col> <v-sheet> วันที่ </v-sheet></v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-card>
</template>

<style scoped>
.v-card-main {
  width: 80%;
  height: 100%;
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  border-radius: 10px;
  border: 3px solid black;
}
.v-row-text {
  font-size: 18px;
}
.v-text-table {
  font-size: 18px;
}
</style>

<script>
export default {
  data() {
    return {
      customers: [
        {
          no: "1",
          product_code: "123",
          product_name: "F",
          quantity: "20",
          unit_price: "10",
          discount: "5",
          tax: "3",
          price: 15,
        },
        {
          no: "1",
          product_code: "123",
          product_name: "F",
          quantity: "20",
          unit_price: "10",
          discount: "5",
          tax: "3",
          price: 15,
        },
        {
          no: "1",
          product_code: "123",
          product_name: "F",
          quantity: "20",
          unit_price: "10",
          discount: "5",
          tax: "3",
          price: 15,
        },
      ],
    };
  },
};
</script>
