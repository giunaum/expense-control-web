import axios from "axios";
import {environment} from "../../environments/environment";

const apiExpenseControl = axios.create({baseURL: `${environment.hostApi}/v1/expense`});

apiExpenseControl.defaults.headers.post['Content-Type'] = 'application/json';
apiExpenseControl.defaults.headers.put['Content-Type'] = 'application/json';

export default apiExpenseControl;
