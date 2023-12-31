<?php

namespace App\Console\Commands;

use App\Mail\PesananMasukMail;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class TestEmail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:test-email';

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
        $pesanan = \App\Models\Pesanan::orderBy('tanggal_pesanan', 'desc')->first();
        Mail::to('testreceiver@gmail.com')->send(new PesananMasukMail($pesanan));
    }
}
