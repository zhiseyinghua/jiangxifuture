<template>
  <v-container>
    <v-btn v-on:click="getuserdata"> get user data</v-btn>
    <v-row>
      <v-col>
        <v-card
          ><v-card-title>
            <span class="title font-weight-light">基本信息</span>
          </v-card-title>
          <v-card-text>
            <v-simple-table>
              <template v-slot:default>

                  <tr>
                    <th class="text-left">登陆账号</th>
                    <td>111</td>
                  </tr>
                  <tr>
                    <th class="text-left">登陆密码</th>
                    <td>111</td>
                  </tr>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template> 
<script>
// import authServies from "./auth.servies";

import UserServe from '../user.serve'
export default {
  data() {
    return {
    };
    
  },
  methods:{
       getuserdata() {
        UserServe.byuseridgetUserDate('key').subscribe(
          success=>{
            console.log('11111111111111111111',success)
          },
          err =>{
            console.log('2222222222222222222222',err)
          }
        )
      }
    }
};
</script>