import { verifyToken } from "../utils/jwt";

export interface GraphQLContext {
  adminId?: string;
}

export function getAdminFromToken(token?: string): string | null {
  if (!token) return null;
  
  // Remove "Bearer " if present
  const actualToken = token.startsWith("Bearer ") ? token.slice(7) : token;
  const payload = verifyToken(actualToken);
  
  return payload?.adminId || null;
}

