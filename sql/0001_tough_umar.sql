ALTER TABLE "family_member" ALTER COLUMN "head_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "trucks" ADD COLUMN "id" integer PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY (sequence name "trucks_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "active" boolean NOT NULL;