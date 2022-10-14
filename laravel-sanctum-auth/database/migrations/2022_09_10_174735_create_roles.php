<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use App\Models\User;
return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $role1= Role::create(['name' => 'Encargado']);
        $role2= Role::create(['name' => 'Publicador']);
        $role3= Role::create(['name' => 'Empleador']);
        $role4= Role::create(['name' => 'Usuario']);
        

        Permission::create(['name' => 'admin.VerUsuarios']) ->assignRole([$role1]);
        Permission::create(['name' => 'Usuario.home']) ->assignRole([$role4]);
        // $user= User::find(1);
        // $user->assignRole($role1);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
    }
};
