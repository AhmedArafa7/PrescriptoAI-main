import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, Location } from '@angular/common'; // Location لزر العودة
import { ToastrService } from 'ngx-toastr'; // لإظهار الإشعارات

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  imports: [ReactiveFormsModule, CommonModule], // CommonModule ضروري لـ *ngIf أو @if
})
export class CheckComponent implements OnInit {

  imageForm!: FormGroup;
  selectedFile: File | null = null;
  imageFileName: string = 'No image selected';

  // معلومات الـ API كما في الصورة
  apiEndpoint: string = 'https://serverless.roboflow.com/infer/workflows/myprojectnaeen/detect-count-and-visualize';
  apiKey: string = 'API Key: V511M41eqLQckFWVAy0f';

  constructor(
    private fb: FormBuilder,
    private location: Location, 
    private toastr: ToastrService 
  ) {}

  ngOnInit(): void {
    this.imageForm = this.fb.group({
      imageUrl: ['', Validators.pattern(/^(http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)], // Regex بسيط للـ URL
    });
  }

  goBack(): void {
    this.location.back();
  }

  onTestUrl(): void {
    if (this.imageForm.get('imageUrl')?.invalid) {
      this.imageForm.get('imageUrl')?.markAsTouched();
      this.toastr.error('Please enter a valid Image URL.');
      return;
    }
    const imageUrl = this.imageForm.get('imageUrl')?.value;
    console.log('Testing Image URL:', imageUrl);
    this.toastr.info('Sending URL for testing...');
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.imageFileName = this.selectedFile.name;
    } else {
      this.selectedFile = null;
      this.imageFileName = 'No image selected';
    }
  }

  onPickImage(): void {
    // هذه الدالة ستُشغّل النقر على input type="file" المخفي
    document.getElementById('fileInput')?.click();
  }

  onTestFile(): void {
    if (!this.selectedFile) {
      this.toastr.error('Please pick an image file first.');
      return;
    }
    console.log('Testing Image File:', this.selectedFile.name);
    this.toastr.info('Sending file for testing...');
  }
}