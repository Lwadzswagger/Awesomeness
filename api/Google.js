import { Google, Constants} from 'expo';

const scope = ['profile', 'email'];

const loginAsync = async ()=>{
    try{
const result =  await Google.logInAsync(   { 
    androidClientId: Constants.manifest.extra.GoogleAppId.android,
    iosClientId: Constants.manifest.extra.GoogleAppId.ios
})
      
        if(result.type === 'success'){
        return Promise.resolve(result.accessToken);
        }return Promise.reject('No success')
}
 catch(error){
console.log('error', error)

return  Promise.reject(error)
    }
}

export const GooogleApi = {
    loginAsync
} 