"use server"

import { createPaymentRecord } from "@/lib/db";

export async function savePaymentRecord(data: {
  name: string;
  email: string;
  amount: number;
  status: string;
  paymentId?: string;
}) {
  try {
    // This calls the function you just updated in lib/db.ts
    const record = await createPaymentRecord(data);
    
    if (record) {
      return { success: true, data: record };
    } else {
      return { success: false, error: "Database failed to return a record." };
    }
  } catch (error) {
    console.error("Action Error:", error);
    return { success: false, error: "Server Action failed." };
  }
}