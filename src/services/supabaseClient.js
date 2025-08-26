import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
    throw new Error("Missing REACT_APP_SUPABASE_URL environment variable");
}

if (!supabaseAnonKey) {
    throw new Error("Missing REACT_APP_SUPABASE_ANON_KEY environment variable");
}

// Crear y exportar el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const portfolioDB = {
    // Obtener todas las experiencias con sus proyectos
    getExperiences: async () => {
        const { data, error } = await supabase
            .from("experience")
            .select(
                `
        *,
        experience_projects (
          projects (*)
        )
      `
            )
            .order("start_date", { ascending: false });

        if (error) throw error;

        return data.map((exp) => ({
            ...exp,
            projects: exp.experience_projects.map((ep) => ep.projects),
        }));
    },

    // Obtener todos los proyectos con sus skills
    getProjects: async () => {
        const { data, error } = await supabase
            .from("projects")
            .select(
                `
        *,
        project_skills (
          skills (*)
        )
      `
            )
            .order("created_at", { ascending: false });

        if (error) throw error;

        return data.map((project) => ({
            ...project,
            skills: project.project_skills.map((ps) => ps.skills),
        }));
    },

    // Obtener skills agrupadas por tipo
    getSkillsByType: async () => {
        const { data, error } = await supabase
            .from("skills")
            .select("*")
            .order("name");

        if (error) throw error;

        return data.reduce((acc, skill) => {
            if (!acc[skill.type]) acc[skill.type] = [];
            acc[skill.type].push(skill);
            return acc;
        }, {});
    },
};
