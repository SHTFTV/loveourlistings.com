export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      agent_subscription_payments: {
        Row: {
          amount_usd: number | null
          created_at: string
          id: string
          paypal_sale_id: string | null
          paypal_subscription_id: string | null
          raw_event: Json | null
        }
        Insert: {
          amount_usd?: number | null
          created_at?: string
          id?: string
          paypal_sale_id?: string | null
          paypal_subscription_id?: string | null
          raw_event?: Json | null
        }
        Update: {
          amount_usd?: number | null
          created_at?: string
          id?: string
          paypal_sale_id?: string | null
          paypal_subscription_id?: string | null
          raw_event?: Json | null
        }
        Relationships: []
      }
      agent_subscriptions: {
        Row: {
          agent_email: string | null
          agent_name: string | null
          cancelled_at: string | null
          country: string
          created_at: string
          id: string
          paypal_plan_id: string
          paypal_subscription_id: string | null
          slot_number: number
          status: string
          updated_at: string
        }
        Insert: {
          agent_email?: string | null
          agent_name?: string | null
          cancelled_at?: string | null
          country: string
          created_at?: string
          id?: string
          paypal_plan_id: string
          paypal_subscription_id?: string | null
          slot_number: number
          status?: string
          updated_at?: string
        }
        Update: {
          agent_email?: string | null
          agent_name?: string | null
          cancelled_at?: string | null
          country?: string
          created_at?: string
          id?: string
          paypal_plan_id?: string
          paypal_subscription_id?: string | null
          slot_number?: number
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      image_alert_config: {
        Row: {
          alert_email: string | null
          cooldown_minutes: number
          enabled: boolean
          error_rate_threshold: number
          id: string
          min_sample_size: number
          miss_rate_threshold: number
          updated_at: string
          webhook_url: string | null
        }
        Insert: {
          alert_email?: string | null
          cooldown_minutes?: number
          enabled?: boolean
          error_rate_threshold?: number
          id?: string
          min_sample_size?: number
          miss_rate_threshold?: number
          updated_at?: string
          webhook_url?: string | null
        }
        Update: {
          alert_email?: string | null
          cooldown_minutes?: number
          enabled?: boolean
          error_rate_threshold?: number
          id?: string
          min_sample_size?: number
          miss_rate_threshold?: number
          updated_at?: string
          webhook_url?: string | null
        }
        Relationships: []
      }
      image_alert_log: {
        Row: {
          delivered_email: boolean
          delivered_webhook: boolean
          id: string
          metric: string
          notes: string | null
          threshold: number
          triggered_at: string
          value: number
        }
        Insert: {
          delivered_email?: boolean
          delivered_webhook?: boolean
          id?: string
          metric: string
          notes?: string | null
          threshold: number
          triggered_at?: string
          value: number
        }
        Update: {
          delivered_email?: boolean
          delivered_webhook?: boolean
          id?: string
          metric?: string
          notes?: string | null
          threshold?: number
          triggered_at?: string
          value?: number
        }
        Relationships: []
      }
      rss_posts: {
        Row: {
          categories: string[] | null
          description: string | null
          fetched_at: string
          guid: string
          id: string
          image_url: string | null
          link: string
          published_at: string | null
          source: string
          status: string
          title: string
        }
        Insert: {
          categories?: string[] | null
          description?: string | null
          fetched_at?: string
          guid: string
          id?: string
          image_url?: string | null
          link: string
          published_at?: string | null
          source: string
          status?: string
          title: string
        }
        Update: {
          categories?: string[] | null
          description?: string | null
          fetched_at?: string
          guid?: string
          id?: string
          image_url?: string | null
          link?: string
          published_at?: string | null
          source?: string
          status?: string
          title?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
