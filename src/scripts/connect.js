import { createClient } from '@supabase/supabase-js'
import {hashPassword} from "./hashPassword";

const supabaseUrl = 'https://honmnyluszwsyaahqpzn.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvbm1ueWx1c3p3c3lhYWhxcHpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3OTIxMTEsImV4cCI6MjAyNzM2ODExMX0.lixNZGorkPl4tv18ZVhSNyIUDbZtbBGh6tRF27ppWuU"
export const supabase = createClient(supabaseUrl, supabaseKey)

export async function loginTest(username, hashedPwd) {
    const { data: users, error } = await supabase.from("users").select("*").eq("username", username);
  
    if (error) {
      console.error("Erreur lors de la recherche de l'utilisateur:", error.message);
      return false;
    }
  
    if (users.length === 0) {
      console.log("Utilisateur non trouvé");
      return false;
    }
  
    const hashedPasswordFromDatabase = users[0].pwd;
    const hashedPassword = await hashedPwd;
  
    if (hashedPassword === hashedPasswordFromDatabase) {
      console.log("Connexion réussie");
      return true;
    } else {
      console.log("Mot de passe incorrect");
      return false;
    }
}

export async function getUserDataFromDB(username) {
    const { data: users, error } = await supabase.from("users").select("*").eq("username", username);
    
    if (error) {
      return false;
    }

    if (users.length === 0) {
      return false;
    }

    const data = users[0];

    return data;
}

export async function sendLevelDataToDB(username, newScoreDataTable, difficulty, userScores) {

  console.log("Données de niveau reçues pour l'utilisateur : ", newScoreDataTable);

  userScores.scores[difficulty - 1].push(newScoreDataTable);
  const { error: updateError } = await supabase
    .from('users')
    .update({ scores: userScores })
    .eq('username', username);

  if (updateError) {
    console.error("Erreur lors de la mise à jour des données de l'utilisateur:", updateError.message);
    return false;
  }

  console.log("Données mises à jour avec succès (client-side et server-side) !");

  return true;
}

export async function sendRegisterDataToDB(username, pwd) {
  try {
    const scores = { scores: [[], [], [], []] };
    
    const hashedPwd = (await hashPassword(pwd)).toString()
      const { data: users, error } = await supabase.from('users').insert([
          { username: username, pwd: hashedPwd, scores: scores },
      ], { returning: 'minimal' });

      if (error) {
          throw error;
      }

      return true; 
  } catch (error) {
    console.log(error)
      return false; 
  }
}