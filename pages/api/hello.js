export default function handler(req,res){
    res.status(200).json({text: 'Hello'})
}

export async function fetchPosts() {
    const response = await fetch('exampleurl.com');
    const data = await response.json();
    return data;
}
