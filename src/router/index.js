import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//权限管理--------------------------
//欢迎
const Welcome = (resolve)=>{
    import('components/limitMGT/welcome').then((module)=>{
        resolve(module)
    })
}
//登录
const Login = (resolve)=>{
    import('components/limitMGT/login').then((module)=>{
        resolve(module)
    })
}
// 注册-注册页面1
const RegisterInfo1 = (resolve)=>{
    import('components/limitMGT/registerInfo1').then((module)=>{
        resolve(module)
    })
}
// 注册-注册页面2
const RegisterInfo2 = (resolve)=>{
    import('components/limitMGT/registerInfo2').then((module)=>{
        resolve(module)
    })
}
// 注册-注册页面3
const RegisterInfo3 = (resolve) =>{
    import('components/limitMGT/registerInfo3').then((module)=>{
        resolve(module)
    })
}
// 找回密码-发送验证码
const SendMsg = (resolve) =>{
    import('components/limitMGT/sendPW').then((module)=>{
        resolve(module)
    })
}
// 找回密码-输入密码
const SetNewPW = (resolve) =>{
    import('components/limitMGT/setNewPW').then((module)=>{
        resolve(module)
    })
}

//账户管理--------------------------
//我的账户
const Account = (resolve) =>{
    import('components/accountMGT/account').then((module)=>{
        resolve(module)
    })
}
//公司信息
const CompanyInfo = (resolve) =>{
    import('components/accountMGT/companyInfo').then((module)=>{
        resolve(module)
    })
}
//公司认证-上传执照
const Identify = (resolve) =>{
    import('components/accountMGT/identify').then((module)=>{
        resolve(module)
    })
}
//公司认证-密码修改
const ModifyPW = (resolve) =>{
    import('components/accountMGT/modifyPW').then((module)=>{
        resolve(module)
    })
}

// 聚合搜索--------------------------
// 搜索全部
const SearchAll = (resolve) =>{
    import('components/searchAll/searchAll').then((module)=>{
        resolve(module)
    })
}
// 个人详情
const PersonalDetail = (resolve) =>{
    import('components/searchAll/personalDetail').then((module)=>{
        resolve(module)
    })
}

//员工管理--------------------------
//员工管理
const StaffMGT = (resolve) =>{
    import('components/staffMGT/staffMGT').then((module)=>{
        resolve(module)
    })
}
//添加员工
const AddStaff = (resolve) =>{
    import('components/staffMGT/addStaff').then((module)=>{
        resolve(module)
    })
}

//职位管理--------------------------
//职位管理
const JobMGT = (resolve) =>{
    import('components/jobMGT/jobMGT').then((module)=>{
        resolve(module)
    })
}
//在线职位
const JobOnline = (resolve) =>{
    import('components/jobMGT/jobOnline').then((module)=>{
        resolve(module)
    })
}
//下线职位
const JobOffline = (resolve) =>{
    import('components/jobMGT/jobOffline').then((module)=>{
        resolve(module)
    })
}
//下线职位
const JoblDetail = (resolve) =>{
    import('components/jobMGT/jobDetail').then((module)=>{
        resolve(module)
    })
}
//发布新职位
const PublishJob = (resolve) =>{
    import('components/jobMGT/publishJob').then((module)=>{
        resolve(module)
    })
}
//岗位职责
const JobContent = (resolve) =>{
    import('components/jobMGT/jobContent').then((module)=>{
        resolve(module)
    })
}
//岗位职责
const CompanyLabel = (resolve) =>{
    import('components/jobMGT/companyLabel').then((module)=>{
        resolve(module)
    })
}

//面试管理--------------------------
//全部面试
const AllInterview = (resolve) =>{
    import('components/interviewMGT/allInterview').then((module)=>{
        resolve(module)
    })
}
//待面试
const WaitInterview = (resolve) =>{
    import('components/interviewMGT/waitInterview').then((module)=>{
        resolve(module)
    })
}
//发送面试通知（可修改）
const SendNotice = (resolve) =>{
    import('components/interviewMGT/sendNotice').then((module)=>{
        resolve(module)
    })
}
//待入职
const WaitHire = (resolve) =>{
    import('components/interviewMGT/waitHire').then((module)=>{
        resolve(module)
    })
}

//我的简历库--------------------------
//全部简历
const AllResume = (resolve) =>{
    import('components/myResume/allResume').then((module)=>{
        resolve(module)
    })
}
//平台下载
const WebDownload = (resolve) =>{
    import('components/myResume/webDownload').then((module)=>{
        resolve(module)
    })
}
//投递简历
const DeliverResume = (resolve) =>{
    import('components/myResume/deliverResume').then((module)=>{
        resolve(module)
    })
}

//其他--------------------------
//404
const NoWeb = (resolve) =>{
    import('components/noWeb').then((module)=>{
        resolve(module)
    })
}


export default new Router({
    routes: [
        {
            path: '/welcome',
            component: Welcome
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/registerInfo1',
            component: RegisterInfo1
        },
        {
            path: '/registerInfo2',
            component: RegisterInfo2
        },
        {
            path: '/registerInfo3',
            component: RegisterInfo3
        },
        {
            path: '/SendPw',
            component: SendMsg
        },
        {
            path: '/SetNewPW',
            component: SetNewPW
        },
        {
            path: '/searchAll',
            component: SearchAll,
        },
        {
            path: '/personalDetail',
            component: PersonalDetail
        },
        {
            path: '/jobDetail',
            component: JoblDetail
        },
        {
            path: '/jobMGT',
            component: JobMGT,
            children:[
                {
                    path:'/jobOnline',
                    component:JobOnline
                },
                {
                    path:'/jobOffline',
                    component:JobOffline
                }
            ]
        },
        {
            path: '/account',
            component: Account
        },
        {
            path: '*',
            component: NoWeb
        },
        {
            path: '/',
            redirect:'/welcome'
        }
    ]
})

