const TipoFiltro = async() => {
 
    const url = "https://workshops-2.herokuapp.com/sessions/";
    let industry_segment = [];
    let primary_topic = [];
    let session_type = [];
    let date =[];
    const data = await fetch(url);
    const json = await data.json();
  

    json.forEach((e) => {
      if (!industry_segment.includes(e.industry_segment)) {
        industry_segment.push(e.industry_segment);
      }
      if (!primary_topic.includes(e.primary_topic)) {
        primary_topic.push(e.primary_topic);
      }
      if (!session_type.includes(e.session_type)) {
        session_type.push(e.session_type);
      }
    });
 
    
    
    return {
      industry_segment: industry_segment,
      primary_topic: primary_topic,
      session_type: session_type,
    };
  };
  export default TipoFiltro