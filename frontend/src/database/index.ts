import axios from 'axios';

const BASE_URL = 'https://us-central1-pj-marowd.cloudfunctions.net/';

// GET /comments?className=<className>
export async function getComments(className: string) {
  const res = await axios.get<getCommentsResult[]>(BASE_URL + 'comments/', {
    params: {
      class_name: className
    }
  });
  console.log(res.data);
  return res.data;
}

// GET /comments?className=<className>&comment_id=<commentId>
export async function getComment(className: string, uid: string) {
  const res = await axios.get<getCommentsResult>(BASE_URL + 'comment/', {
    params: {
      class_name: className,
      uid: uid
    }
  });
  console.log(res.data);
  return res.data;
}

interface getCommentsResult {
  title: string;
  created_at: AtedAt;
  made_by: string;
  updated_at: AtedAt;
  comment: string;
}

interface AtedAt {
  _seconds: number;
  _nanoseconds: number;
}
