import { AsyncStorage } from 'react-native'
import {  types , flow} from 'mobx-state-tree';
import { customersApi } from './../api/Api';  
import { navigationService } from '../api/navigationService';
const TOKEN_KEY= '@kasilam/token'  

 const Userinfo = types.model('UserInfo', {
    _id:types.identifier,
    firstName:types.string,
    lastName:types.string,
    avatarUrl:types.maybe(types.string)
})

export const CurrentUser = types.model('CurrentUser', {
    authToken: types.maybe(types.string),
    info:types.maybe(Userinfo),
})

.actions(self => ({
setUpAuth:flow(function*(){
yield self.getAuthToken();
yield   self.getUserInfo();
}),

    getUserInfo: flow(function*(){
        try {
            if (self.authToken) {
                const res = yield customersApi
                .url('/me')
                .headers({Authorization: `Bearer ${self.authToken}`})
                .get()
                .json();

                console.log('res', res);

                self.info = res;
                console.log('info', self.info);
                 
            }
        } catch (error) {
            console.log('error', error);
            
        }
    }),
    getAuthToken:flow(function*(){
        try {
            const token=yield AsyncStorage.getItem(TOKEN_KEY);
            if(token){
                self.authToken = token;
            }else{
                navigationService.navigate('Auth')
            }
        } catch (error) {
            console.log('error', error);
            
        }
    }),


    saveToken:flow(function*(token){
try {
    yield AsyncStorage.setItem(TOKEN_KEY, token)
     
} catch (error) {
    console.log('error', error);
    
}
    })
,
    login:flow(function*(providerToken, provider){
        try {
            const res = yield customersApi
            .post({
                token:providerToken,
                provider
            })
            .json();
            
            if (res.token) {
                self.authToken = res.token;
                yield self.saveToken(res.token)
                yield self.getUserInfo()
            }            
        } catch (error) {
            console.log(error);
        }
    })
}))