export default function handler(req,res){
  res.setHeader('Cache-Control','no-store');
  if(req.method!=='POST') return res.status(405).json({error:'POST only'});
  const {suspect,motive,proof,evidence}=req.body||{};
  const keys=Array.isArray(evidence)?evidence:[];
  const correct=suspect==='evelyn' && motive==='fund' && ['lantern','ledger','calendar','mud'].includes(proof) && keys.includes('ledger') && keys.includes('lantern') && keys.includes('calendar');
  if(correct) return res.status(200).json({solved:true,message:'CASE CLOSED. Evelyn Price killed Jamie at the boathouse to conceal her embezzlement of scholarship funds. She struck him with the brass lantern at approximately 11:47 PM and staged the death as an accidental drowning. Sarah mistook Evelyn moving his body for Jamie walking alive. Your evidence connects motive, opportunity and weapon. Jamie can finally rest.'});
  return res.status(200).json({solved:false,message:'The evidence does not yet support a complete conviction. Cross-check motive, location, and the physical murder weapon. Keep investigating, Detective.'});
}
