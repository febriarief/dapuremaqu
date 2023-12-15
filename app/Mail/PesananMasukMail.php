<?php

namespace App\Mail;

use App\Models\Pesanan;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class PesananMasukMail extends Mailable
{
    use Queueable, SerializesModels;

    public Pesanan $pesanan;
    public array   $detilPesanan;

    /**
     * Create a new message instance.
     */
    public function __construct(Pesanan $pesanan)
    {
        $this->pesanan = $pesanan;
        $this->detilPesanan = [];
        foreach($pesanan->detail as $k => $detail) {
            $this->detilPesanan[$k]['nama_produk']       = $detail->nama_produk;
            $this->detilPesanan[$k]['gambar_produk']     = "data:image/png;base64," . base64_encode(file_get_contents(public_path('images/' . $detail->gambar_produk)));
            $this->detilPesanan[$k]['kuantitas_produk']  = $detail->kuantitas_produk;
            $this->detilPesanan[$k]['total']             = $detail->total;
        }
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Order Placed Mail',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.pesanan-masuk',
            with: [
                'pesanan' => $this->pesanan,
                'detil_pesanan' => $this->detilPesanan,
                'url_pesanan' => 'https://kelompok-4.my.id/#/order?order_id=' . $this->pesanan->id_pesanan
            ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
