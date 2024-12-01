CREATE TABLE IF NOT EXISTS "address" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "address_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"cep" varchar(255) NOT NULL,
	"number" integer NOT NULL,
	"street" varchar(255) NOT NULL,
	"neighborhood" varchar(255) NOT NULL,
	"city" varchar(255) NOT NULL,
	"state" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "drivers" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "drivers_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"birthday" date NOT NULL,
	"address" integer,
	"email" varchar(255) NOT NULL,
	"cpf" varchar(255) NOT NULL,
	"cellphone" varchar(255) NOT NULL,
	"cnh_number" varchar(255) NOT NULL,
	"cnh_category" varchar(255) NOT NULL,
	"cnh_date" date NOT NULL,
	CONSTRAINT "drivers_email_unique" UNIQUE("email"),
	CONSTRAINT "drivers_cpf_unique" UNIQUE("cpf"),
	CONSTRAINT "drivers_cellphone_unique" UNIQUE("cellphone"),
	CONSTRAINT "drivers_cnh_number_unique" UNIQUE("cnh_number")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "family_member" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "family_member_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"birthday" date NOT NULL,
	"address" integer,
	"email" varchar(255) NOT NULL,
	"cpf" varchar(255) NOT NULL,
	"cellphone" varchar(255) NOT NULL,
	"head_id" integer,
	CONSTRAINT "family_member_email_unique" UNIQUE("email"),
	CONSTRAINT "family_member_cpf_unique" UNIQUE("cpf"),
	CONSTRAINT "family_member_cellphone_unique" UNIQUE("cellphone")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "head_family" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "head_family_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"birthday" date NOT NULL,
	"address" integer,
	"email" varchar(255) NOT NULL,
	"cpf" varchar(255) NOT NULL,
	"cellphone" varchar(255) NOT NULL,
	CONSTRAINT "head_family_email_unique" UNIQUE("email"),
	CONSTRAINT "head_family_cpf_unique" UNIQUE("cpf"),
	CONSTRAINT "head_family_cellphone_unique" UNIQUE("cellphone")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trucks" (
	"plate" varchar(255) NOT NULL,
	"model" varchar(255) NOT NULL,
	"year" date NOT NULL,
	CONSTRAINT "trucks_plate_unique" UNIQUE("plate")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"birthday" date NOT NULL,
	"address" integer,
	"email" varchar(255) NOT NULL,
	"cpf" varchar(255) NOT NULL,
	"cellphone" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"privileges" varchar(255) NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_cpf_unique" UNIQUE("cpf"),
	CONSTRAINT "users_cellphone_unique" UNIQUE("cellphone")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "drivers" ADD CONSTRAINT "drivers_address_address_id_fk" FOREIGN KEY ("address") REFERENCES "public"."address"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "family_member" ADD CONSTRAINT "family_member_address_address_id_fk" FOREIGN KEY ("address") REFERENCES "public"."address"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "family_member" ADD CONSTRAINT "family_member_head_id_head_family_id_fk" FOREIGN KEY ("head_id") REFERENCES "public"."head_family"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "head_family" ADD CONSTRAINT "head_family_address_address_id_fk" FOREIGN KEY ("address") REFERENCES "public"."address"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_address_address_id_fk" FOREIGN KEY ("address") REFERENCES "public"."address"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
