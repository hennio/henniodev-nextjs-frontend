import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from "@/lib/axios";
import {useEffect, useState} from "react";
import Usertable from "@/components/Tables/usertable";

const Dashboard = (props) => {

    const router = useRouter()
    const [users, setUsers] = useState([])

    useEffect(() => {axios.get("api/users").then((response) => {setUsers(response.data.data)}).catch((error) => console.error(error))}, []);

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {router.pathname}
                </h2>
            }>

            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <Usertable users={users} />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
export default Dashboard
