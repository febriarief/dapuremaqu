<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class InitAdminUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'admin:init';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        \App\Models\Admin::create(['nama_pengguna' => 'admin', 'kata_sandi' => bcrypt('12345678')]);
        $this->info('Finish');
    }
}
