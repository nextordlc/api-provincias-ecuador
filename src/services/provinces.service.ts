import { db } from "../config/database";

const getListProvinces = async ()=>{
        const { data, error } = await db.supabase
                .from('provincias_ecuador')
                .select('*');
        if(error) throw error;
        return data;
}

const getListProvincesById = async (id:any)=>{
        const { data, error } = await db.supabase
                .from('provincias_ecuador')
                .select('*')
                .eq('id',id)
                .single();
        if(error) throw error;
        return data;
}

export const provinceService = {
        getListProvinces,
        getListProvincesById
}
