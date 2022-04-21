import Project from "../../models/Project";
import Experience from "../../models/Experience";
import Education from "../../models/Education";
import Profile from "../../models/Profile";

module.exports={
    Query:{
        getProfile:async()=>{
            try{
                const profile = await Profile.find();
                if(profile){
                    return profile
                }else{
                    throw new Error("User has no profile")
                }
                
            }catch(err){
                throw new Error(err)
            }
        },

     getProjects:async()=>{
            try{
              const projects = await Project.find().sort({createdAt:-1})
                if(projects){
                    return projects
                }
                else{
                    throw new Error("User has no projects")
                }
                
            }catch(err){
                throw new Error(err)
            }
        },
        getEducations:async()=>{
            try{
                const educations = await Education.find().sort({createdAt:-1})
                console.log(educations)
                if(educations){
                    return educations
                }else{
                    throw new Error("User has no educational record")
                }
            }catch(err){
                throw new Error(err)
            }
        },
        getExperiences:async()=>{
            try{
                const experiences = await Experience.find();
             
                if(experiences){
                    return experiences
                } 
                else{
                    throw new Error("User has no experiences")
                }
            }catch(err){
                throw new Error(err)
            }
        },
    },
    Mutation:{
        updateProfile:async(_,{ profileId,profileInput:{nationality,age,gender,status,number,firstName,birthday,middleName,lastName,email}})=>{
            const profile = await Profile.findByIdAndUpdate(profileId,{
                nationality,
                age,
                gender,
                status,
                number,
                firstName,
                lastName,
                middleName,
                email,
                birthday
            },{new:true})
            return profile;
        },
        createProject:async(_,{projectInput:{name,languages,description,link,image}},context)=>{
            if(name.trim() === ''){
                throw new Error('name must not be empty');
            }
            if(languages.trim() === ''){
                throw new Error('languages must not be empty');
            }
            if(link.trim() === ''){
                throw new Error('link must not be empty');
            }
            const newProject = new Project({
                name,
                languages,
                description,
                link,
                image,
                createdAt: new Date().toISOString()
            });
            const project = await newProject.save();
            return project;

        },
        updateProject:async(_,{projectId,projectInput:{name,languages,description,link,image}},context)=>{
            const project =  await Project.findByIdAndUpdate(projectId,{
                name,
                languages,
                description,
                link,
                image,
                createdAt: new Date().toISOString()
            },
            {new:true});
          return project;
        },
        createEducation:async(_,{eduInput:{institution,duration,certificate,major}},context)=>{
            if(institution.trim() === ''){
                throw new Error('institution must not be empty');
            }
            if(duration.trim() === ''){
                throw new Error('duration must not be empty');
            }
            const newEducation = new Education({
                institution,
                duration,
                certificate,
                major
            });
            const education = await newEducation.save();
            return education;
        },
        createExperience:async(_,{exInput:{duration,organisation,responsibility,role}},context)=>{
            if(responsibility.trim() === ''){
                throw new Error('responsibility must not be empty');
            }
            if(duration.trim() === ''){
                throw new Error('duration must not be empty');
            }
            const newExperience = new Experience({
                duration,
                organisation,
                responsibility,
                role
            });
            const experiences = await newExperience.save();
            return experiences;
        },
        createProfile:async(_,{profileInput:{age,gender,status,number,firstName,middleName,lastName,email,nationality}},context)=>{
            if(gender.trim() === ''){
                throw new Error('gender must not be empty');
            }
            if(status.trim() === ''){
                throw new Error('status must not be empty');
            }
            if(firstName.trim() === ''){
                throw new Error('firstName must not be empty');
            }
            if(middleName.trim() === ''){
                throw new Error('middleName must not be empty');
            }
            if(lastName.trim() === ''){
                throw new Error('lastName must not be empty');
            }
           const newProfile = new Profile({
            age,
            gender,
            status,
            number,
            firstName,
            middleName,
            lastName,
            email,
            nationality
           });
           const profile = await newProfile.save();
           return profile;
        
        }
    }
}