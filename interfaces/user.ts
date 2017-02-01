/**
 * User interface for login
 * DO NOT MODIFY THIS FILE, EXTEND THE INTERFACE INSTEAD
 */

export interface User {
  
  employee_rec_name?: string;
  employee_id: number;
  employee_party_name?: string;
  employee_party_id: number;
  language_code?: string;
  company_id: number;
}

export interface UserSession {
	userId: string;
	sessionId: string;
	database?: string; 
};
