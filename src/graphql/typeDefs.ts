import gql from "graphql-tag";

const typeDefs = gql`
 type Profile{
    id:ID! 
     nationality:String
     birthday:String
     age:Int
     gender:String!
     status:String!
     number:Int
     firstName:String!,
    middleName:String!,
    lastName:String!,
    email:String!

 }
 type Education{
     institution:String!
     duration:String!
     certificate:String!
     major:String!
 }
 type Experience{
     duration:String!
     organisation:String!
     responsibility:String!
     role:String!
 }
 type Project{
     id:ID! 
     name:String!
     languages:String!
     description:String!
     link:String!
     image:String!
     createdAt:String!
 }
 type Result{
     projects:[Project]
     education:[Education]
     experiences:[Experience]
 }
 input profileInput{
     nationality:String
     age:Int
     gender:String!
     status:String!
     number:Int
     firstName:String!
     birthday:String
     middleName:String!
     lastName:String!
     email:String
 }
 input projectInput{
     name:String!
     languages:String!
     description:String!
     link:String!
     image:String!

 }
 input eduInput{
    institution:String!
     duration:String!
     certificate:String!
     major:String!
 }
 input exInput{
    duration:String!
     organisation:String!
     responsibility:String!
     role:String!
 }
 type Query{
 getProfile:[Profile]
 getProjects:[Project]
 getEducations:[Education]
 getExperiences:[Experience]
 searchData:[Result]

}
 type Mutation{
    createProfile(profileInput:profileInput):Profile!
    updateProfile(profileId:ID,profileInput:profileInput):Profile!
    createProject(projectInput:projectInput):Project!
    updateProject(projectId:ID,projectInput:projectInput):Project
    createEducation(eduInput:eduInput):Education!
    createExperience(exInput:exInput):Experience!

 }

`;
export default typeDefs;