import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from "@/lib/axios";

export const getStaticPaths = async () => {
    const {data} = await axios.get("api/users")

    const users = data.data;
    const paths = users.map((user) => ({ params: { id: user.id.toString() } }));
    return {
        paths,
        fallback: true,
    };
};

export async function getStaticProps({params}) {
    const {data} = await axios.get(`api/user/${params.id}`)
    //const {data} = await axios.get(`/api/users/edit/1`)

    return {props: {data}}
}

const User = (props) => {

    const router = useRouter()

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
                            {props.data.data.name}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
export default User
