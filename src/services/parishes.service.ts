import { db } from "../config/database";

const getListParishesById = async (id:any)=>{
        const { data, error } = await db.supabase
                .from('parroquias_ecuador')
                .select('id,parroquia,id_canton')
                .eq('id',id)
                .single();
        if(error) throw error;
        return data;
}

const getParishesByCantId = async (id:any)=>{
    const { data, error } = await db.supabase
            .from('parroquias_ecuador')
            .select('id,parroquia,id_canton')
            .eq('id_canton',id);
    if(error) throw error;
    return data;
}

export const parishesService = {
    getListParishesById,
    getParishesByCantId  
}